import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/',
      component: () => import('@/layout/index'),
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('@/views/main/index')
        },
        {
          path: '/rollManage',
          name: 'rollManage',
          component: () => import('@/views/rollManage/index')
        },
        {
          path: '/courseManage',
          name: 'courseManage',
          component: () => import('@/views/courseManage/index')
        },
        {
          path: '/scoreManage',
          name: 'scoreManage',
          component: () => import('@/views/scoreManage/index')
        }
      ]
    }
  ]
})
