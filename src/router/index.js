import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import {allRole} from '@/assets/staticData/rolesFront.js'
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
      meta: { title: 'Dashboard' },
      children: [
        {
          path: '/main',
          name: 'main',
          component: () => import('@/views/main/index')
        }
      ]
    },
    {
      path: '/optimizeCenter',
      name: 'optimizeCenter',
      component: () => import('@/layout/index'),
      children: [
        {
          path: '/example1',
          name: 'example1',
          component: () => import('@/views/optimizeCenter/user/example1'),
          meta: { title: '样例1' }
        },
        {
          path: '/example2',
          name: 'example2',
          component: () => import('@/views/optimizeCenter/user/example2'),
          meta: { title: '样例2' }
        },
        {
          path: '/exampleManage1',
          name: 'exampleManage1',
          component: () => import('@/views/optimizeCenter/manage/example1'),
          meta: { title: '删除信息' }
        },
        {
          path: '/exampleManage2',
          name: 'exampleManage2',
          component: () => import('@/views/optimizeCenter/manage/example2'),
          meta: { title: '添加信息' }
        }
      ]
    },
    {
      path: '/exampleCenter',
      name: 'exampleCenter',
      component: () => import('@/layout/index'),
      children: [
        {
          path: '/table',
          name: 'table',
          component: () => import('@/views/exampleCenter/Table/index'),
          meta: { title: '表格样例' }
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: () => import('@/views/exampleCenter/Echarts/index'),
          meta: { title: '图表样例' }
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
          component: () => import('@/views/authority/api/index'),
          meta: { title: 'api管理' }
        },
        {
          path: '/auth',
          name: 'auth',
          component: () => import('@/views/authority/auth/index'),
          meta: { title: '权限管理' }
        },
        {
          path: '/role',
          name: 'role',
          component: () => import('@/views/authority/role/index'),
          meta: { title: '角色管理' }
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/authority/user/index'),
          meta: { title: '用户管理' }
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
          component: () => import('@/views/person/index'),
          meta: { title: '个人中心' }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/main') {
    store.commit('insertCurrentPage', (to.fullPath).substr(1))
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
