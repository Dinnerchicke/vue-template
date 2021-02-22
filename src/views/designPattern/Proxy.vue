<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">代理模式</p></div>
    <div class="card">
      <p>保护代理：保护代理可以帮服务器过滤掉一些请求(js中很少使用)</p>
      <p>虚拟代理：虚拟代理等到资源到位以后才调用/显示资源(常用)</p>
    </div>
    <div class="card">
      <p>运用代理，避免一次性向服务器发送过多请求，等待几秒再发送</p><br>
      <p>setInterval</p>
      <el-button id="id11" @click="addListInterval(1)" style="margin-top:20px">1</el-button>
      <el-button id="id12" @click="addListInterval(2)">2</el-button>
      <el-button id="id13" @click="addListInterval(3)">3</el-button>
      <el-button id="id14" @click="addListInterval(4)">4</el-button>
      <el-button id="id15" @click="addListInterval(5)" style="margin-bottom:20px">5</el-button>
      <p>setTimeout</p>
      <el-button id="id21" @click="addListTimeout(1)" style="margin-top:20px">1</el-button>
      <el-button id="id22" @click="addListTimeout(2)">2</el-button>
      <el-button id="id23" @click="addListTimeout(3)">3</el-button>
      <el-button id="id24" @click="addListTimeout(4)">4</el-button>
      <el-button id="id25" @click="addListTimeout(5)">5</el-button>
    </div>
    <div class="card" id="place">setTimeout</div>
    <div class="card" id="place1">setInterval</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      todoListInterval: [],
      todoListTimeout: [],
      start: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    // 循环定时发送请求：这种情况是从头到尾进行轮询的情况
    let place = document.getElementById('place1')
    place.innerText = '等待输入'
    setInterval(() => {
      if (this.todoListInterval.length > 0) {
        place.innerText = this.todoListInterval
        setTimeout(() => {
          this.todoListInterval = []
        }, 2000)
      } else if (this.todoListInterval.length === 0) {
        place.innerText = '等待输入'
      }
      // console.log(this.todoListInterval.length)
    }, 2000)
  },
  methods: {
    addListInterval (id) {
      this.todoListInterval.push(id)
      // console.log(this.todoList)
    },
    addListTimeout (id) { // 添加到List中并设置标识符start为true
      this.todoListTimeout.push(id)
      this.sendRequest()
    },
    sendRequest () {
      let place = document.getElementById('place')
      place.innerText = '等待输入'
      setTimeout(() => {
        place.innerText = this.todoListTimeout
        setTimeout(() => {
          this.todoListTimeout = [] // 清空任务列表
        }, 3000)
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
