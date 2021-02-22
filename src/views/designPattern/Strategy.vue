<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">策略模式</p></div>
    <div class="card">
      <p>策略模式：根据不同参数命中不同策略</p>
    </div>
    <div class="card">
      <el-radio-group v-model="func" @input="getFunc">
        <el-radio-button label="S" ></el-radio-button>
        <el-radio-button label="A" ></el-radio-button>
        <el-radio-button label="B" ></el-radio-button>
      </el-radio-group>
      <el-input v-model="salary" placeholder="请输入内容" style="margin-top:20px" @input="getFunc"></el-input>
      <!-- <el-button >test</el-button> -->
    </div>
    <div class="card">
      {{result}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      func: 'A',
      result: 0,
      // funct: undefined,
      salary: 0
    }
  },
  methods: {
    S  (salary) {
      return salary * 4
    },
    A  (salary) {
      return salary * 3
    },
    B  (salary) {
      return salary * 2
    },
    calculateBons (func, salary) {
      return func(salary)
    },
    getFunc () {
      // return this.calculateBons.apply(this.A, this.salary)
      // eslint-disable-next-line no-eval
      this.result = eval('this.calculateBons' + '(this.' + this.func + ',' + this.salary + ')')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
