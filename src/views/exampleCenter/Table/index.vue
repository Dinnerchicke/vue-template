<template>
  <div>
    <!-- operaList为增和改的模态框内容 -->
    <!-- tableList为表格的列内容 -->
    <!-- tableData为表格数据 -->
    <!-- res为接口返回值 -->
    <table-content
    :count="count"
    :operaList="operaList"
    :tableList="tableList"
    :tableData="tableData"
    :res="res"
    @getData="getData"
    @deleteData="deleteData"
    @addData="addData"
    @editData="editData"
    >
      <!--  -->
      <template slot="navBar">
        <!-- <el-input v-model="search" placeholder="请输入关键字">
          <el-button slot="append" icon="el-icon-search" />
        </el-input> -->
      </template>
    </table-content>
  </div>
</template>

<script>
import '@/mock/default.js'
import { tableMix } from '@/mixin/tableMix.js'
import { apiOperaList as operaList } from '@/assets/staticData/operaList.js'
import { apiTableList as tableList } from '@/assets/staticData/tableList.js'
export default {
  name: '',
  components: {},
  props: {},
  mixins: [tableMix], // 一些公用的属性方法可以放在mixin里面,各个组件互不影响
  data () {
    return {
      search: '',
      count: 0,
      params: {}
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getData()
  },
  mounted () {},
  methods: {
    addData (data) {
      this.$axios.get('http://127.0.0.1:7002/addRes')
        .then(res => {
          // console.log(res)
          this.res = res.data
        })
    },
    editData (_id, data) {
      this.$axios.get('http://127.0.0.1:7002/editRes')
        .then(res => {
          // console.log(res)
          this.res = res.data
        })
    },
    getData (data) {
      this.operaList = operaList
      this.tableList = tableList
      // const params = {
      //   currentPage: this.currentPage,
      //   pageSize: this.pageSize
      // }
      if (data === undefined) {
        this.params = {
          currentPage: 1,
          pageSize: 10
        }
      } else {
        this.params = data
      }
      this.$axios.post('http://127.0.0.1:7002/exampleData', this.params)
        .then(res => {
          // console.log(res)
          this.tableData = res.data.data.rows
          this.count = res.data.data.total
        })
    },
    deleteData (data) {
      this.$axios.get('http://127.0.0.1:7002/delRes')
        .then(res => {
          // console.log(res)
          this.res = res.data
        })
    }
  }
}
</script>

<style scoped>
</style>
