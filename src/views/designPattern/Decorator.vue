<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">装饰者模式</p></div>
    <div class="card">
      <p>装饰者模式意在为对象动态添加职责</p>
      <p>具体来说，在不破坏原有对象的基础上为对象添加功能</p>
      <p>例子：就像穿衣服，在不破坏人体的情况下为人体增加保暖能力</p>
    </div>
    <div class="card">
      <p>代码为不污染原型的AOP装饰函数</p>
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
    setTimeout(() => {
      this.Decorate()
    }, 2000)
  },
  methods: {
    Decorate () {
      let before = function (fn, beforeFn) {
        return function () {
          beforeFn.apply(this, arguments) // 先执行新函数
          return fn.apply(this, arguments) // 再执行老函数
        }
      }
      let after = function (fn, afterFn) {
        return function () {
          let ret = fn.apply(this, arguments) // 先执行老函数
          afterFn.apply(this, arguments)
          return ret
        }
      }

      // before
      let firstFn = before(
        function () {
          console.log('1我在老函数里面')
        },
        function () {
          console.log('1我在老函数里面')
        }
      )
      firstFn = before(firstFn, function () {
        console.log('1我在新函数里面')
      })
      firstFn()

      // after
      let SecondFn = after(
        function () {
          console.log('2我在老函数里面')
        },
        function () {
          console.log('2我在老函数里面')
        }
      )
      SecondFn = after(SecondFn, function () {
        console.log('2我在新函数里面')
      })
      SecondFn()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
