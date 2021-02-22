<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">中介者模式</p></div>
    <div class="card">
      <p>优点：中介者使对象之间的耦合降低</p>
      <p>缺点：新增一个中介者对象，而且因为对象之间复杂性，中介者也会变得巨大</p>
      <p>使用场景：如果对象之间的复杂耦合确实导致调用和维护出现困难且耦合度呈指数增长，则可以考虑使用中介者模式来重构代码</p>
    </div>
    <div class="card">
      选择颜色:<select id="colorSelect">
        <option value="">请选择</option>
        <option value="red">红色</option>
        <option value="blue">蓝色</option>
      </select>

      选择内存：<select id="memorySelect">
        <option value=""></option>
        <option value="32G">32G</option>
        <option value="16G">16G</option>
      </select>

      输入购买数量：<input type="text" id="numberInput"><br>
      您选择了颜色：<div id="colorInfo"></div><br/>
      您选择了内存：<div id="memoryInfo"></div><br>
      您输入了数量：<div id="numberInfo"></div><br>

      <button id="nextBtn" disabled="true">请选择手机颜色和购买数量</button>
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
    // let goods = {
    //   'red|32G': 3,
    //   'red|16G': 0,
    //   'blue|32G': 1,
    //   'blue|16G': 6
    // }

    var colorSelect = document.getElementById('colorSelect')
    var memorySelect = document.getElementById('memorySelect')
    var numberInput = document.getElementById('numberInput')
    var colorInfo = document.getElementById('colorInfo')
    var memoryInfo = document.getElementById('memoryInfo')
    var numberInfo = document.getElementById('numberInfo')
    var nextBtn = document.getElementById('nextBtn')

    let mediator = (function () { // 监听后集中处理
      return {
        changed: function (obj) { // 有修改时发布给订阅者
          let color = colorSelect.value
          let memory = memorySelect.value
          let number = numberInput.value
          // let stock = goods[color + '|' + memory]

          if (obj === colorSelect) { // 分别去修改
            colorInfo.innerHTML = color
          } else if (obj === memorySelect) {
            memoryInfo.innerHTML = memory
          } else if (obj === numberInput) {
            numberInfo.innerHTML = number
          }

          if (!color) {
            nextBtn.disabled = true
            nextBtn.innerHTML = '请选择手机颜色'
            return
          }

          if (!memory) {
            nextBtn.disabled = true
            nextBtn.innerHTML = '请选择内存大小'
            return
          }

          if (((number - 0) | 0) !== number - 0) {
            nextBtn.disabled = true
            nextBtn.innerHTML = '请输入正确的购买数量'
            return
          }

          nextBtn.disabled = false
          nextBtn.innerHTML = '放入购物车'
        }
      }
    })()

    // 注册change事件
    colorSelect.onchange = function () {
      mediator.changed(this)
    }
    memorySelect.onchange = function () {
      mediator.changed(this)
    }
    numberInput.oninput = function () {
      mediator.changed(this)
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
