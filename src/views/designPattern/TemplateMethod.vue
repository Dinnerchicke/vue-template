<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">模板方法模式</p></div>
    <div class="card">
      <p>模板方法使用一种隔离变化的方法写好固定的架构，然后设置钩子来隔离变化，如下面的代码使用报错的方式来逼开发者重写方法</p>
      <p>let brew = param.brew || function () {
        throw new Error('子类必须重写brew方法')
      }</p>
    </div>
    <div class="card">
      <p>类似vue的生命周期里的created、mounted之类的，在这里我们可以执行代码，但是其他地方需要遵循框架的内容</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    let Beverage = function (param) {
      let boilWater = function () {
        console.log('把水煮沸')
      }
      let brew = param.brew || function () {
        throw new Error('子类必须重写brew方法')
      }
      let pourInCup = param.pourInCup || function () {
        throw new Error('子类必须重写pourInCup方法')
      }
      let addCondiments = param.addCondiments || function () {
        throw new Error('子类必须重写addCondiments方法')
      }

      let F = function () {}

      F.prototype.init = function () {
        boilWater()
        brew()
        pourInCup()
        addCondiments()
      }

      return F
    }

    let Coffee = Beverage({ // 高阶函数直接传递函数为参数
      brew: function () {
        console.log('用沸水冲泡咖啡')
      },
      pourInCup: function () {
        console.log('把咖啡倒进杯子')
      },
      addCondiments: function () {
        console.log('加糖和牛奶')
      }
    })

    let coffee = new Coffee()
    coffee.init()
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
