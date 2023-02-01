import itemSchema from '@/store/modules/schemas/user.schema';
import ModuleBase from "@/store/modules/ModuleBase";
import axios from "axios";

const resourceName = 'users'
const base = new ModuleBase(itemSchema, resourceName);
export default {
  namespaced: base.namespaced,
  state: {
    ...base.state,
    authenticatedUser: null
  },
  getters: {
    ...base.getters,
    authenticatedUser: state => state.authenticatedUser
  },
  mutations: {
    ...base.mutations,
    SET_AUTHENTICATED_USER(state, payload) {
      state.authenticatedUser = payload
    }
  },
  actions: {
    ...base.actions,
    setAuthenticatedUser: async ({commit}, payload) => {
      return commit('SET_AUTHENTICATED_USER', payload);
    },
    changePassword: async ({}, payload) => {
      return await axios.post('/user/change-password/' + payload.id, payload);
    },
    createApiKey: async ({}) => {
      let res = await axios.get('/user/create-api-key');
      return res.data.data
    }
  }
}
