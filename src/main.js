import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'
import '@/utils/http.js'
import '@/utils/permission.js'
// 不使用上面这条语句不能使用elementui
var echarts = require('echarts')

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

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
