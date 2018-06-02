import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './type'
import API from '@/utils/httpUtil'
import {HANDLE_USERINFO} from './type'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      password: ''
    },
    token: ''
  },
  mutations: {
    HANDLE_LOGIN (state, newUserInfo) {
      state.user = newUserInfo
    },
    HANDLE_AUTHORIZATION_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    async HANDLE_LOGIN ({commit, state}, info) {

      let res = await API('/logins,', info, 'POST')
      commit('HANDLE_LOGIN',info)
      commit('HANDLE_AUTHORIZATION_TOKEN', res.token)
      return state
    }
  }
})

export default store
