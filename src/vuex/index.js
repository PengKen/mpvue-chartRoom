import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './type'
Vue.use(Vuex)
console.log(type)
const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      password: ''
    }
  },
  mutations: {
    HANDLE_USERINFO(state, newUserInfo) {
      state.user = newUserInfo
    }
  },
  actions: {
    HANDLE_USERINFO({commit, state}, newUserInfo) {
      console.log(newUserInfo)
      return new Promise((resolve,reject)=>{
        commit(type.HANDLE_USERINFO, newUserInfo)
        resolve(state)
      })

    }
  }
})

export default  store
