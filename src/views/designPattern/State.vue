<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">状态模式</p></div>
    <div class="card">
      <p>状态模式与策略模式形式上类似，不同点在于他们的意图</p>
      <p>在策略模式中，用户必须熟知这些策略类才能主动切换算法。</p>
      <p>而在状态模式里，状态和行为是早已定义好的，用户并不需要了解</p>
    </div>
    <div class="card">
      <div id="place"></div>
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
    let Light = function () {
      this.currentState = FSM.off
      this.button = null
    }
    Light.prototype.init = function () { // 初始状态
      let button = document.createElement('button')
      let self = this

      button.innerHTML = '已关灯'
      this.button = document.getElementById('place').appendChild(button)
      this.button.onclick = function () {
        self.currentState.buttonWasPressed.call(self)
      }
    }
    let FSM = {
      off: { // 关闭状态
        buttonWasPressed: function () {
          console.log('关灯')
          this.button.innerHTML = '下一次按我是开灯'
          this.currentState = FSM.on // 修改状态，如果有更多的话转换成对应的状态就行
        }
      },
      on: { // 开启状态
        buttonWasPressed: function () {
          console.log('开灯')
          this.button.innerHTML = '下一次按我是关灯'
          this.currentState = FSM.off
        }
      }
    }
    let light = new Light()
    light.init()
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
