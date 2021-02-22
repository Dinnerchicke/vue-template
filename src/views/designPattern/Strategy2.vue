<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">策略模式</p></div>
    <div class="card">
      <el-button type="primary" @click="opera('S', 1000)">奖金4倍</el-button>
      <el-button type="primary" @click="opera('A', 1000)">奖金3倍</el-button>
    </div>
    <div class="card">
      <p>opera (handle, salary) {
        if (handle === 'S') {
          this.salary = salary * 4
        } else {
          this.salary = salary * 3
        }
      }</p>
      <p>类似的功能操作使用同一个接口</p>
    </div>
    <div class="card">
      {{salary}}
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
      salary: 1000
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    opera (handle, salary) {
      if (handle === 'S') {
        this.salary = salary * 4 // 甚至还可以直接调用其他函数
      } else {
        this.salary = salary * 3
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
