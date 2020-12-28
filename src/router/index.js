import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import {studentRouterMapping, teacherRouterMapping} from '@/utils/rolesFront.js'
import { Message } from 'element-ui'
// import axios from 'axios'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/',
      component: () => import('@/layout/index'),
      redirect: '/main',
      children: [
        {
          path: '/main',
          component: () => import('@/views/main/index'),
          meta: { title: '首页' }
        }
      ]
    },
    {
      path: '/rollManage',
      name: 'rollManage',
      component: () => import('@/layout/index'),
      children: [
        {
          path: '/changeLicence',
          name: 'changeLicence',
          component: () => import('@/views/rollManage/student/changeLicence')
        },
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
          path: '/changeInformation',
          name: 'changeInformation',
          component: () => import('@/views/rollManage/manage/changeInformation')
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
      path: '/courseManage',
      name: 'courseManage',
      component: () => import('@/layout/index'),
      children: [
      ]
    },
    {
      path: '/scoreManage',
      name: 'scoreManage',
      component: () => import('@/layout/index'),
      children: [
      ]
    }
    // {
    //   path: '/',
    //   redirect: '/rollManage',
    //   children: [
    //     {
    //     },
    //     {
    //       path: '/courseManage',
    //       name: 'courseManage',
    //       component: () => import('@/views/courseManage/index')
    //     },
    //     {
    //       path: '/scoreManage',
    //       name: 'scoreManage',
    //       component: () => import('@/views/scoreManage/index')
    //     }
    //   ]
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const studentMapping = JSON.stringify(studentRouterMapping)
  const teacherMapping = JSON.stringify(teacherRouterMapping)
  if (to.path === '/login' || to.path === '/main') {
    next()
  } else {
    // 从vuex里面获取数据代替router,假如没有数据则重新获取
    // 对用户状态进行检测,假如跳转到非当前用户权限范围则返回

    const roleState = store.getters.getRole
    // console.log(roleState)
    const toPath = (to.path).substr(1)
    if (roleState === null) {
      next('/login')
    } else if (roleState === '0') {
      if (studentMapping.indexOf(toPath) === -1) {
        console.log(toPath)
        // console.log('非法跳转')
        // return new Error('非法跳转')
        Message.error('非法跳转')
      } else {
        next()
      }
    } else if (roleState === '1') {
      if (teacherMapping.indexOf(toPath) === -1) {
        return new Error('非法跳转')
      } else {
        next()
      }
    }
  }
})

export default router
