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
      path: '/exampleCenter',
      name: 'exampleCenter',
      redirect: '/table',
      component: Layout,
      meta: {
        name: '样例中心',
        icon: 'iconfont icon-biaodanzujian-biaoge1'
      },
      children: [
        {
          path: '/table',
          name: 'table',
          component: () => import('@/views/exampleCenter/Table/index'),
          meta: { name: '表格样例' }
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: () => import('@/views/exampleCenter/Echarts/index'),
          meta: { name: '图表样例' }
        }
      ]
    },
    {
      path: '/CSSCenter',
      name: 'CSSCenter',
      redirect: '/baseSass',
      component: Layout,
      meta: {
        name: '样式中心',
        icon: 'iconfont icon-moshubang'
      },
      children: [
        {
          path: '/baseSass',
          name: 'baseSass',
          component: () => import('@/views/CSSCenter/baseSass/index'),
          meta: { name: '基础样例' }
        },
        {
          path: '/animista',
          name: 'animista',
          component: () => import('@/views/CSSCenter/animista/index'),
          meta: { name: 'animista动效样例' }
        }
      ]
    },
    {
      path: '/optimizeCenter',
      name: 'optimizeCenter',
      redirect: '/exampleManage1',
      component: Layout,
      meta: {
        name: '优化中心',
        icon: 'iconfont icon-gongnengdingyi1'
      },
      children: [
        {
          path: '/example1',
          name: 'example1',
          component: () => import('@/views/optimizeCenter/user/example1'),
          meta: { name: '样例1' }
        },
        {
          path: '/example2',
          name: 'example2',
          component: () => import('@/views/optimizeCenter/user/example2'),
          meta: { name: '样例2' }
        },
        {
          path: '/exampleManage1',
          name: 'exampleManage1',
          component: () => import('@/views/optimizeCenter/manage/example1'),
          meta: { name: '样例1' }
        },
        {
          path: '/exampleManage2',
          name: 'exampleManage2',
          component: () => import('@/views/optimizeCenter/manage/example2'),
          meta: { name: '样例2' }
          // hidden: true
        }
      ]
    },
    {
      path: '/designPattern',
      name: 'designPattern',
      redirect: '/design',
      component: Layout,
      meta: {
        name: '设计模式',
        icon: 'iconfont icon-icon_shiyongwendang'
      },
      children: [
        {
          path: '/design',
          name: 'design',
          component: () => import('@/views/designPattern/Design'),
          meta: { name: '设计原则' }
        },
        {
          path: '/singleton',
          name: 'singleton',
          component: () => import('@/views/designPattern/Singleton'),
          meta: { name: '单例模式' }
        },
        {
          path: '/proxy',
          name: 'proxy',
          component: () => import('@/views/designPattern/Proxy'),
          meta: { name: '代理模式' }
        },
        {
          path: '/command',
          name: 'command',
          component: () => import('@/views/designPattern/Command'),
          meta: { name: '命令模式' }
        },
        {
          path: '/composite',
          name: 'composite',
          component: () => import('@/views/designPattern/Composite'),
          meta: { name: '组合模式' }
        },
        {
          path: '/flyWeight',
          name: 'flyWeight',
          component: () => import('@/views/designPattern/FlyWeight'),
          meta: { name: '享元模式' }
        },
        {
          path: '/state',
          name: 'state',
          component: () => import('@/views/designPattern/State'),
          meta: { name: '状态模式' }
        },
        {
          path: '/strategy',
          name: 'strategy',
          component: () => import('@/views/designPattern/Strategy'),
          meta: { name: '策略模式' }
        },
        {
          path: '/strategy2',
          name: 'strategy2',
          component: () => import('@/views/designPattern/Strategy2'),
          meta: { name: '策略模式2' }
        },
        {
          path: '/decorator',
          name: 'decorator',
          component: () => import('@/views/designPattern/Decorator'),
          meta: { name: '装饰者模式' }
        },
        {
          path: '/mediator',
          name: 'mediator',
          component: () => import('@/views/designPattern/Mediator'),
          meta: { name: '中介者模式' }
        },
        {
          path: '/response',
          name: 'response',
          component: () => import('@/views/designPattern/Response'),
          meta: { name: '职责链模式' }
        },
        {
          path: '/adapter',
          name: 'adapter',
          component: () => import('@/views/designPattern/Adapter'),
          meta: { name: '适配器模式' }
        },
        {
          path: '/templateMethod',
          name: 'templateMethod',
          component: () => import('@/views/designPattern/TemplateMethod'),
          meta: { name: '模版方法模式' }
        },
        {
          path: '/pubSub',
          name: 'pubSub',
          component: () => import('@/views/designPattern/PubSub'),
          meta: { name: '发布订阅模式' }
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
          component: () => import('@/views/person/index'),
          hidden: true
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
