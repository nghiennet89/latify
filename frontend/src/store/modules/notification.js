import ModuleBase, {buildQuery} from "@/store/modules/ModuleBase";
import itemSchema from "@/store/modules/schemas/role.schema";
import axios from "axios";
import cloneDeep from "clone-deep";

const resourceName = 'notifications'
const base = new ModuleBase(itemSchema, resourceName);

export default {
  namespaced: base.namespaced,
  state: {
    ...base.state,
  },
  getters: {
    ...base.getters,
    unRead: state => state.all.filter(i => !i.read_at),
    serverNotifications: state => state.serverNotifications,
  },
  mutations: {
    ...base.mutations,
    MARK_AS_READ(state, ids) {
      let all = cloneDeep(state.all);
      all.forEach(item => {
        if (ids.indexOf(item.id) > -1) item.read_at = new Date();
      })
      state.all = all;
    },
    ADD_SERVER_NOTIFICATION(state, payload) {
      state.serverNotifications.push(payload)
    }
  },
  actions: {
    ...base.actions,
    getUnread: async ({commit}) => {
      let searchField = {
        read_at: {
          value: 'null',
          type: '=',
        }
      }
      let params = buildQuery({
        searchFields: searchField,
      });

      let res = await axios.get('/' + resourceName, {params: params});
      commit('UPSERT_MULTI', res.data.data);
      return res;
    },
    // eslint-disable-next-line
    countUnread: async ({}) => {
      return await axios.get('/' + resourceName + '/count-unread');
    },
    markAsRead: async ({commit}, ids) => {
      let res = await axios.post('/' + resourceName + '/mark-as-read', {ids: ids}, {params: {silent: true}});
      if (res.data && !res.data.error) {
        commit('MARK_AS_READ', ids);
      }
    },
    gotServerNotification: async ({commit}, payload) => {
      commit('ADD_SERVER_NOTIFICATION', payload)
    },
  }
}
