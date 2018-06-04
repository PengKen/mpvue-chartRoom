import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations/mutations'
import * as actions from './actions/actions'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      password: ''
    },
    token: '',
    neighbors: new Map()
  },
  mutations,
  actions
})

export default store
