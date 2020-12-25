import axios from 'axios'
import Vue from 'vue'
import router from '../router'

axios.defaults.baseURL = 'http://127.0.0.1:7001'
// 默认请求地址

axios.interceptors.response.use(res => {
  if (res.data.meta.status === 401) {
    router.push('/login')
    sessionStorage.clear()
    window.location.reload()
  }
  return res
})

Vue.prototype.$axios = axios
