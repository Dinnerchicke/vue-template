import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// 不使用上面这条语句不能使用elementui,但是目前项目使用CDN加速,故不需要引入element-ui

import '@/assets/icon/iconfont.css'

import '@/utils/http.js'
import '@/utils/permission.js'

import '@/styles/transition.scss'
import '@/styles/global.css'
import '@/styles/normalize.css'

import md5 from 'blueimp-md5'
import echarts from 'echarts'
// 虚拟滚动组件--按需显示
// import VueVirtualScroller from 'vue-virtual-scroller'

// Vue.use(VueVirtualScroller)
// Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$md5 = md5

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
  // 用h代替createElement,原为createElement=>createElement(App)
  // 原型为:render:function(createElement){
  // return createElement(App)
  // }
})
