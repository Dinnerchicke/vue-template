import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import {allRole} from '@/utils/rolesFront.js'
import { Message } from 'element-ui'
// import axios from 'axios'

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
      component: () => import('@/views/login/index')
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },
    {
      path: '/',
      component: () => import('@/layout/index'),
      redirect: '/login',
      children: [
        {
          path: '/login',
          component: () => import('@/views/login/index'),
          meta: { title: '首页' }
        }
      ]
    },
    {
      path: '/main',
      component: () => import('@/layout/index'),
      meta: { title: '首页' },
      children: [
        {
          path: '/main',
          name: 'main',
          component: () => import('@/views/main/index')
        }
      ]
    },
    {
      path: '/rollManage',
      name: 'rollManage',
      component: () => import('@/layout/index'),
      children: [
        {
          path: '/changePassword',
          name: 'changePassword',
          component: () => import('@/views/rollManage/student/changePassword')
        },
        {
          path: '/getInformation',
          name: 'getInformation',
          component: () => import('@/views/rollManage/student/getInformation')
        },
        {
          path: '/delInformation',
          name: 'delInformation',
          component: () => import('@/views/rollManage/manage/delInformation')
        },
        {
          path: '/insertInformation',
          name: 'insertInformation',
          component: () => import('@/views/rollManage/manage/insertInformation')
        }
      ]
    },
    {
      path: '/powerManage',
      name: 'powerManage',
      component: () => import('@/layout/index'),
      children: [
        {
          path: '/api',
          name: 'api',
          component: () => import('@/views/authority/api/index')
        },
        {
          path: '/auth',
          name: 'auth',
          component: () => import('@/views/authority/auth/index')
        },
        {
          path: '/role',
          name: 'role',
          component: () => import('@/views/authority/role/index')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/authority/user/index')
        }
      ]
    },
    {
      path: '/person',
      name: 'person',
      component: () => import('@/layout/index'),
      children: [
        {
          path: '/person',
          component: () => import('@/views/person/index')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/main') {
    next()
  } else {
    // 从vuex里面获取数据代替router,假如没有数据则重新获取
    // 对用户状态进行检测,假如跳转到非当前用户权限范围则返回
    try {
      store.commit('insertCurrentPage', (to.fullPath).substr(1))
      // 这里有个问题，假如获取到的role为null,直接会报typeError,不会进入roleState === null,故要try{}catch{}
      const roleState = store.getters.getRole
      // eslint-disable-next-line no-useless-escape
      const toPath = '\"routerName\":\"' + (to.path).substr(1) + '\"'
      // const toPath = (to.path).substr(1)
      // console.log(toPath)
      var roleName = 'role' + roleState
      // console.log(allRole[roleName])
      var roleGet = JSON.stringify(allRole[roleName])
      if (roleGet.indexOf(toPath) === -1) {
        // console.log(toPath)
        // console.log('非法跳转')
        // return new Error('非法跳转')
        Message.error('非法跳转')
      } else {
        next()
      }
    } catch (error) {
      // console.log(error)
      next('/login')
    }
  }
})

export default router
