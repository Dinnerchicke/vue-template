import Vue from 'vue'
import Vuex from 'vuex'
// 不要为了使用vuex而使用vuex,页面还是用自己的数据最好,如果用的太多,考虑拆分独立模块

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    currentPage: '',
    loginState: JSON.parse(sessionStorage.getItem('loginState'))
  },
  mutations: {
    insertLoginState (state, loginInfo) {
      state.loginState = loginInfo
    },
    insertCurrentPage (state, currentPage) {
      state.currentPage = currentPage
    },
    insertRole (state, role) {
      state.loginState.role = role
    }
  },
  getters: {
    getRole: state => state.loginState.role,
    getAccount: state => state.loginState.name,
    getAvatar: state => state.loginState.avatarUrl,
    getCurrentPage: state => state.currentPage,
    getLoginState: state => state.loginState
  },
  actions: {},
  modules: {}
})
