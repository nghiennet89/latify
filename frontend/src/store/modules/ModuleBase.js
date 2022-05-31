import inspector from 'schema-inspector';
import axios from 'axios';
import cloneDeep from 'clone-deep';

export const buildQuery = (params) => {
  let options = params.options || {
    itemsPerPage: 10,
    page: 1
  }
  let query = {
    limit: options.itemsPerPage,
    page: options.page,
    silent: params.querySilent ? params.querySilent : false
  }
  if (options.sortBy && options.sortBy.length && options.sortDesc && options.sortDesc.length) {
    query.orderBy = options.sortBy.join(';');
    query.sortedBy = options.sortDesc.join(';').replace(/false/ig, 'asc').replace(/true/ig, 'desc');
  }
  if (params['with'] && !params.searchWith) params.searchWith = params['with'];
  if (params.withCount && !params.searchWithCount) params.searchWithCount = params.withCount;
  if (params.searchWith) query.with = params.searchWith
  if (params.searchWithCount) query.withCount = params.searchWithCount
  
  let search = params.searchFields ? params.searchFields : {}
  let searchValues = [];
  let searchTypes = [];
  Object.keys(search).forEach(key => {
    if (typeof search[key] === 'string') {
      searchValues.push(key + ':' + search[key])
      searchTypes.push(key + ':=')
    } else if (search[key].value !== '' && search[key].type) {
      searchValues.push(key + ':' + search[key].value)
      searchTypes.push(key + ':' + search[key].type)
    }
  })
  if (searchValues.length && searchTypes.length) {
    query.search = searchValues.join(';');
    query.searchFields = searchTypes.join(';');
    query.searchJoin = options.searchJoin ? options.searchJoin : 'AND';
  }
  return query
}

export default (itemSchema, resourceName) => {
  return {
    namespaced: true,
    state: {
      all: [],
      searchParams: {},
      selectedId: null,
      pagination: {
        count: 0,
        current_page: 0,
        per_page: 0,
        total_pages: 0,
        total: 0,
      }
    },
    
    getters: {
      all: state => state.all,
      getById: state => id => {
        let item = state.all.filter(i => i.id === id);
        if (item.length) return item[0];
        return null
      },
      getByFields: state => fields => {
        return state.all.filter(i => {
          let matched = true;
          Object.keys(fields).forEach(fieldName => {
            if (i[fieldName] !== fields[fieldName]) {
              matched = false;
              return false; //to break forEach
            }
          });
          return matched
        })
      },
      selected: state => {
        let item = state.all.filter(i => i.id === state.selectedId);
        if (item.length) return item[0];
        return null;
      },
      pagination: state => state.pagination,
    },
    
    mutations: {
      INIT_STATE(state, items) {
        state = items;
      },
      ALL(state, items) {
        state.all = items;
      },
      PAGINATION(state, pagination) {
        state.pagination = pagination
      },
      ADD(state, item) {
        item = inspector.sanitize(itemSchema.sanitize, item).data;
        let existedItem = state.all.filter(i => i.id === item.id);
        if (!existedItem.length) {
          let all = cloneDeep(state.all)
          all.push(item);
          state.all = all;
        } else console.log('duplicate when add item', item)
      },
      UPDATE(state, item) {
        item = inspector.sanitize(itemSchema.sanitize, item).data;
        let existedItem = state.all.filter(i => i.id === item.id);
        if (existedItem.length) {
          let itemIndex = state.all.indexOf(existedItem[0]);
          let all = cloneDeep(state.all)
          all[itemIndex] = item;
          state.all = all;
        } else console.log('item not found to update', item)
      },
      UPSERT(state, item) {
        let existedItem = state.all.filter(i => i.id === item.id);
        let all = cloneDeep(state.all)
        if (existedItem.length) {
          let itemIndex = state.all.indexOf(existedItem[0]);
          all[itemIndex] = {...existedItem[0], ...item};
        } else all.push(item);
        state.all = all;
      },
      UPSERT_MULTI(state, items) {
        let all = cloneDeep(state.all)
        items.forEach(item => {
          let existedItem = state.all.filter(i => i.id === item.id);
          if (existedItem.length) {
            let itemIndex = state.all.indexOf(existedItem[0]);
            all[itemIndex] = {...existedItem[0], ...item};
          } else all.push(item);
        })
        state.all = all;
      },
      DELETE(state, id) {
        let existedItem = state.all.filter(i => i.id === id);
        if (existedItem.length) {
          state.all = state.all.filter(i => i.id !== id)
        } else console.log('id not found to delete', id)
      },
      SELECT(state, id) {
        state.selectedId = id
      },
      CLEAR(state) {
        state.all = []
        state.selectedId = null
        state.searchParams = {}
      }
    },
    
    actions: {
      get: async ({commit}, searchParams) => {
        let params = buildQuery(searchParams);
        let res = await axios.get('/' + resourceName, {params: params});
        let listItems = res.status === 200 && res.data && res.data.data ? res.data.data : [];
        let meta = res.status === 200 && res.data && res.data.meta ? res.data.meta : {};
        let pagination = meta.pagination ? meta.pagination : {
          count: listItems.length,
          current_page: 1,
          per_page: listItems.length,
          total: listItems.length,
          total_pages: 1,
        }
        if (parseInt(params.limit) === -1) listItems = res.status === 200 && res.data ? res.data : [];
        await commit('ALL', listItems);
        if (params.limit !== -1 && res.meta) {
          pagination = res.meta.pagination
        }
        await commit('PAGINATION', pagination);
        return res
      },
      all: async ({commit}) => {
        let res = await axios.get('/' + resourceName, {params: {limit: -1}});
        let listItems = res.status === 200 && res.data && res.data.data ? res.data.data : [];
        await commit('ALL', listItems);
        await commit('PAGINATION', {
          count: listItems.length,
          current_page: 1,
          per_page: listItems.length,
          total: listItems.length,
          total_pages: 1,
        });
        return res
      },
      getById: async ({commit}, requestData) => {
        let params = requestData.params; //to provide with & withCount
        // http://domain.com/api/resource_name/1?with=relation1;relation2&withcount=relation3;relation4
        let res = await axios.get('/' + resourceName + '/' + requestData.id, {params: params});
        let item = res.status === 200 && res.data ? res.data : null;
        if (!item) return null;
        //find item in list state and update it
        await commit('UPSERT', item);
        return item;
      },
      create: async ({commit}, item) => {
        let res = await axios.post('/' + resourceName, item);
        if (res.status === 200 && res.data && res.data.data) await commit('ADD', res.data.data);
        return res
      },
      update: async ({commit}, item) => {
        let res = await axios.put('/' + resourceName + '/' + item.id, item);
        if (res.status === 200) await commit('UPDATE', item);
        return res
      },
      delete: async ({commit}, itemId) => {
        if (Array.isArray(itemId)) itemId = itemId.join(',');
        let res = await axios.delete(resourceName + '/' + itemId);
        await commit('DELETE', itemId);
        return res
      },
      setSelected: async ({commit}, id) => {
        return await commit('SELECT', id);
      },
      clear: async ({commit}) => {
        return await commit('CLEAR');
      },
      validateInsert: async ({state}, obj) => {
        return await state ? inspector.validate(itemSchema.validate.update, obj) : {}
      },
      validateUpdate: async ({state}, obj) => {
        return await state ? inspector.validate(itemSchema.validate.insert, obj) : {}
      },
      // eslint-disable-next-line
      import: async ({}, data) => {
        return await axios.post('/' + resourceName + '/import', data);
      },
      // eslint-disable-next-line
      export: async ({}, searchParams) => {
        let params = buildQuery(searchParams);
        return await axios.get('/' + resourceName + '/export', {params: params, responseType: 'blob'});
      },
    }
  }
};
