import Vue from 'vue'
import store from '@/store/index.js'
// import router from '@/router/index.js'

Vue.directive('permission', {
  inserted (el, binding) {
    // console.log(el)
    // console.log(binding)
    const role = binding.value.role
    const roleState = store.getters.getRole
    // 假如用户没有相关权限则不显示
    if (role !== roleState) {
      el.parentNode.removeChild(el)
    }
    // console.log(role)
  }
})
