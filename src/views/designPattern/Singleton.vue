<template>
  <div>
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">单例模式</p></div>
    <div class="card">
      <p>单例模式的条件：</p>
      <ul>1.只能有一个实例</ul>
      <ul>2.可以全局访问这个实例</ul>
    </div>
    <div class="card">
      <el-button type="primary" @click="getSingle()">单例模式按钮</el-button>
      <div id="place" style="font-size:30px"></div>
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
  mounted () {},
  methods: {
    // domTest () { // dom操作test
    //   let place = document.getElementById('place')
    //   let single = document.createElement('BUTTON')
    //   let text = document.createTextNode('单例')
    //   single.setAttribute('style', 'font-size:30px;margin-top:20px')
    //   single.appendChild(text)
    //   place.appendChild(single)
    // },
    createLoginLayer () {
      let place = document.getElementById('place')
      const div = document.createElement('div')
      div.innerHTML = '单例对象'
      // div.style.display = 'none'
      document.body.appendChild(div)
      place.appendChild(div)
      return div
    },
    getSingle () { // 获取单例
      if (!this.instance) {
        this.createLoginLayer()
        this.instance = true
      } else {
        console.log('已有单例对象')
      }
    },
    singleton () {
      // 首先判断是否有单例存在，如果存在则返回已经存在的，否则创建
      this.instance = null // 是否存在的标志
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
