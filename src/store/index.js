import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    loginState: JSON.parse(sessionStorage.getItem('loginState'))
  },
  mutations: {
    insertLoginState (state, loginInfo) {
      state.loginState = loginInfo
    }
  },
  getters: {
    getRole: state => state.loginState.role,
    getAccount: state => state.loginState.account
  },
  actions: {},
  modules: {}
})
