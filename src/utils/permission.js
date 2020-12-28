import Vue from 'vue'
import store from '@/store/index.js'
// import router from '@/router/index.js'

Vue.directive('permission', {
  inserted (el, binding) {
    // console.log(el)
    // console.log(binding)
    const role = binding.value.role
    const roleState = store.getters.getRole
    // console.log(role)
    // console.log(roleState)
    if (role !== roleState) {
      el.parentNode.removeChild(el)
    }
    // 假如用户没有相关权限则不显示
    // console.log(role)
  }
})
