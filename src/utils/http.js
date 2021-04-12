import axios from 'axios'
import Vue from 'vue'
// import router from '../router'
// 默认axios配置

const service = axios.create({
  baseURL: 'http://62.234.130.108:7008/',
  timeout: 2000000 // 请求超时时间
})

// 默认请求地址

// service.interceptors.request.use(config => {
//   // console.log(config)
//   if (router.history.current.fullPath === '/login') { return config } else {
//     const Role = JSON.parse(sessionStorage.getItem('loginState'))
//     // console.log(Role)
//     config.headers.au = Role.au
//     config.headers.token = Role.token
//     // config.headers.ID = sessionStorage.getItem('Id')
//     // config.headers['Access-Control-Allow-Headers'] = '*'
//     return config
//   }
//   // 对api进行规范,角色是student,api名称中有student则成功访问,否则失败
//   // console.log(config)
//   // 使用config.header.属性名给请求头添加字段
//   // config.headers.Authority = '0'
//   // config.headers['Access-Control-Allow-Origin'] = '*'
//   // return config
// }, err => {
//   return Promise.reject(err)
// })

// service.interceptors.response.use(res => {
//   // if (res.data.meta.status === 401) {
//   //   router.push('/login')
//   //   sessionStorage.clear()
//   //   window.location.reload()
//   // }
//   // console.log(res)
//   return res
// }, err => {
//   return Promise.reject(err)
// })

// Vue.prototype.$axios = axios

export default service

Vue.prototype.$axios = axios
