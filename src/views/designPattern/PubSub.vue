<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">发布订阅模式</p></div>
    <div class="card">
      <p>发布订阅模式：当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知</p>
      <p>在Js开发中，我们一般用事件模型来代替传统的发布订阅模式</p>
      <ul>1.指定好谁是发布者</ul>
      <ul>2.给发布者添加一个缓存列表,以便使用回调函数通知订阅者</ul>
      <ul>3.条件触发,发布者遍历缓存列表,依次触发里面存放的回调函数</ul>
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
    // 最简单的发布订阅,但是做不到发送定制内容
    // let salesOff = {}
    // salesOff.client = []
    // salesOff.listen = function (fn) {
    //   this.client.push(fn)
    // }
    // salesOff.trigger = function () {
    //   // eslint-disable-next-line no-cond-assign
    //   for (let i = 0, fn; fn = this.client[i++];) {
    //     fn.apply(this, arguments) // 循环调用客户列表里传入的回调函数
    //   }
    // }
    // salesOff.listen(function (price, square) {
    //   console.log(price)
    //   console.log(square)
    // })
    // salesOff.trigger(20000, 88)
    // salesOff.trigger(10000, 88)

    // 提取发布订阅
    let event = {
      clientList: [], // 客户列表
      listen: function (key, fn) {
        if (!this.clientList[key]) { // 假如没有对应的key存在用户列表,初始化这个用户的列表
          this.clientList[key] = []
        }
        this.clientList[key].push(fn) // 放入用户列表中
      },
      trigger: function () { // 依次遍历用户列表
        let key = Array.prototype.shift.call(arguments)
        let fns = this.clientList[key]
        if (!fns || fns.length === 0) {
          return false
        }
        // eslint-disable-next-line no-cond-assign
        for (let i = 0, fn; fn = fns[i++];) {
          fn.apply(this, arguments)
        }
      }
    }
    let installEvent = function (obj) {
      for (let i in event) {
        obj[i] = event[i]
        // console.log(obj[i])
      }
    }
    let salesOffices = {}
    installEvent(salesOffices)
    salesOffices.listen('squareMeter88', function (price) {
      console.log(price)
    })
    salesOffices.trigger('squareMeter88', 30000)
    salesOffices.trigger('squareMeter88', 40000)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
