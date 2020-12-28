import axios from 'axios'
import Vue from 'vue'
// import router from '../router'

axios.defaults.baseURL = 'http://127.0.0.1:7001'
// 默认请求地址

// axios.interceptors.request.use(config => {
//   // 对api进行规范,角色是student,api名称中有student则成功访问,否则失败
//   console.log(config)
//   return config
// }, err => {
//   return Promise.reject(err)
// })

// axios.interceptors.response.use(res => {
//   if (res.data.meta.status === 401) {
//     router.push('/login')
//     sessionStorage.clear()
//     window.location.reload()
//   }
//   return res
// })

Vue.prototype.$axios = axios
