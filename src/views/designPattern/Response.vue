<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">责任链模式</p></div>
    <div class="card">
      <p>职责链模式：</p>
      <p>优点：1.解耦请求发送者和N个接收者的复杂关系2.增删方便无需修改原来的代码</p>
      <p>缺点：过长的职责链会带来性能问题</p>
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
    let order500 = function (orderType, pay, stock) {
      if (orderType === 1 && pay === true) {
        console.log('得100券')
      } else {
        return 'nextSuccessor' // 不知道下一个节点把请求往后传
      }
    }
    let order200 = function (orderType, pay, stock) {
      if (orderType === 2 && pay === true) {
        console.log('得50券')
      } else {
        return 'nextSuccessor' // 不知道下一个节点把请求往后传
      }
    }
    let orderNormal = function (orderType, pay, stock) {
      if (stock > 0) {
        console.log('无券')
      } else {
        console.log('库存不足') // 不知道下一个节点把请求往后传
      }
    }

    let Chain = function (fn) {
      this.fn = fn
      this.successor = null
    }
    Chain.prototype.setNextSuccessor = function (successor) {
      this.successor = successor
      return successor
    }
    Chain.prototype.passRequest = function () {
      let ret = this.fn.apply(this, arguments)
      if (ret === 'nextSuccessor') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments)
      }
      return ret
    }
    let chainOrder500 = new Chain(order500)
    let chainOrder200 = new Chain(order200)
    let chainOrderNormal = new Chain(orderNormal)
    chainOrder500.setNextSuccessor(chainOrder200)
    chainOrder200.setNextSuccessor(chainOrderNormal)

    chainOrder500.passRequest(1, true, 500)
    chainOrder500.passRequest(1, false, 0)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
