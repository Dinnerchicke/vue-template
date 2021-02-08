// // import Vue from 'vue'
// import router, { asyncRouter } from './index.js'
// import store from '@/store/index.js'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// // import {allRole} from '@/assets/staticData/rolesFront.js'
// // import { Message } from 'element-ui'

// NProgress.configure({ showSpinner: false })

// // 如果角色为2,也就是超级管理员,直接通过
// function hasPermission (roleState, permissionRoles) {
//   if (roleState === 2) return true
//   if (!permissionRoles) return true
//   // eslint-disable-next-line no-unneeded-ternary
//   return (permissionRoles.indexOf(roleState) === -1 ? false : true) // 如果meta.roles里面有则通过
// }

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   // console.log(router)
//   const roleGet = store.getters.getRole
//   store.commit('insertCurrentPage', (to.fullPath).substr(1))
//   if (store.getters.getRightsList.length === 0) { // 假如权限列表为空则创建权限列表
//     router.addRoutes(asyncRouter)
//     // router.options.routes = asyncRouter
//     store.commit('insertRightList', router.options.routes)
//     console.log(store.getters.getRightsList)
//   } else {
//     if (to.path === '/login' || to.path === '/main') {
//       next()
//       NProgress.done()
//     } else {
//       if (store.getters.getRole.length === 0) { // 假如没有用户信息，则渲染路由
//         // 注意addRoute出来的路由不是响应式的，所以需要vuex渲染
//         next('/main')
//       } else { // 用户信息拉取成功后，这时的操作是判断跳转
//         hasPermission(roleGet, to.meta.roles) ? next() : next({ path: '/404' })
//         NProgress.done()
//       }
//     }
//   }
// })

// // router.beforeEach((to, from, next) => {
// //   NProgress.start()
// //   if (to.path === '/login' || to.path === '/main') {
// //     store.commit('insertCurrentPage', (to.fullPath).substr(1))
// //     next()
// //     NProgress.done()
// //   } else {
// //     // 从vuex里面获取数据代替router,假如没有数据则重新获取
// //     // 对用户状态进行检测,假如跳转到非当前用户权限范围则返回
// //     try {
// //       store.commit('insertCurrentPage', (to.fullPath).substr(1))
// //       // console.log(to.fullPath)
// //       // 这里有个问题，假如获取到的role为null,直接会报typeError,不会进入roleState === null,故要try{}catch{}
// //       const roleState = store.getters.getRole
// //       // eslint-disable-next-line no-useless-escape
// //       const toPath = '\"routerName\":\"' + (to.path).substr(1) + '\"'
// //       // const toPath = (to.path).substr(1)
// //       // console.log(toPath)
// //       var roleName = 'role' + roleState
// //       // console.log(allRole[roleName])
// //       var roleGet = JSON.stringify(allRole[roleName])
// //       if (roleGet.indexOf(toPath) === -1) {
// //         // console.log(toPath)
// //         // console.log('非法跳转')
// //         // return new Error('非法跳转')
// //         Message.error('非法跳转')
// //       } else {
// //         next()
// //         NProgress.done()
// //       }
// //     } catch (error) {
// //       // console.log(error)
// //       next('/login')
// //       NProgress.done()
// //     }
// //   }
// // })
