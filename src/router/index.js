import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {allRole} from './rolesFront.js'
import { Message } from 'element-ui'
// import axios from 'axios'
import Layout from '@/layout/index'

NProgress.configure({ showSpinner: false })

// 在这里对导入模块进行界定,降低耦合
// var i = [0, 1, 2]
// const role0 = JSON.stringify(role0Router)
// const role1 = JSON.stringify(role1Router)
// const role2 = JSON.stringify(role2Router)
// const allRole = {role0, role1, role2}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      redirect: '/login',
      children: [
        {
          path: '/login',
          component: () => import('@/views/login/index'),
          meta: { name: '首页' }
        }
      ],
      hidden: true
    },
    {
      path: '/mainF',
      name: 'mainF',
      redirect: '/main',
      component: Layout,
      meta: {
        name: 'Dashboard',
        icon: 'iconfont icon-gongyezujian-yibiaopan'
      },
      children: [
        {
          path: '/main',
          name: 'main',
          component: () => import('@/views/main/index'),
          meta: {
            name: '首页'
          }
        }
      ]
    },
    {
      path: '/powerManage',
      name: 'powerManage',
      redirect: '/api',
      component: Layout,
      meta: {
        name: '权限管理',
        icon: 'iconfont icon-quanxianshenpi'
      },
      children: [
        {
          path: '/api',
          name: 'api',
          component: () => import('@/views/authority/api/index'),
          meta: { name: 'api管理' }
        },
        {
          path: '/auth',
          name: 'auth',
          component: () => import('@/views/authority/auth/index'),
          meta: { name: '权限管理' }
        },
        {
          path: '/role',
          name: 'role',
          component: () => import('@/views/authority/role/index'),
          meta: { name: '角色管理' }
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/authority/user/index'),
          meta: { name: '用户管理' }
        }
      ]
    },
    {
      path: '/personF',
      name: 'personF',
      redirect: '/person',
      component: Layout,
      meta: {
        name: '个人中心',
        icon: 'iconfont icon-icon_zhanghao'
      },
      children: [
        {
          path: '/person',
          name: 'person',
          component: () => import('@/views/person/index')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  store.commit('insertCurrentPage', (to.fullPath).substr(1))
  if (to.path === '/login' || to.path === '/main') {
    next()
    NProgress.done()
  } else {
    // 从vuex里面获取数据代替router,假如没有数据则重新获取
    // 对用户状态进行检测,假如跳转到非当前用户权限范围则返回
    try {
      // console.log(to.fullPath)
      // 这里有个问题，假如获取到的role为null,直接会报typeError,不会进入roleState === null,故要try{}catch{}
      const roleState = store.getters.getRole
      // eslint-disable-next-line no-useless-escape
      const toPath = '' + (to.path).substr(1) + ''
      // const toPath = '\"routerName\":\"' + (to.path).substr(1) + '\"'
      // const toPath = (to.path).substr(1)
      // console.log(toPath)
      var roleName = 'role' + roleState
      // console.log(allRole[roleName])
      var roleGet = allRole[roleName].toString()
      if (roleGet.indexOf(toPath) === -1) {
        // console.log(toPath)
        // console.log('非法跳转')
        // return new Error('非法跳转')
        Message.error('非法跳转')
        localStorage.clear()
        next('/login')
        NProgress.done()
      } else {
        next()
        NProgress.done()
      }
    } catch (error) {
      // console.log(error)
      next('/login')
      NProgress.done()
    }
  }
})

export default router
