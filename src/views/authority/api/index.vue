<template>
  <div>
    <table-content
    :operaList="operaList"
    :tableList="tableList"
    :tableData="tableData"
    :res="res"
    @getData="getData"
    @deleteData="deleteData"
    @addData="addData"
    @editData="editData"
     />
  </div>
</template>

<script>
import '@/mock/default.js'
import { apiOperaList as operaList } from '@/utils/operaList.js'
import { apiTableList as tableList } from '@/utils/tableList.js'
import TableContent from '@/components/defaultTable/TableContent/index'
export default {
  name: '',
  components: {
    TableContent
  },
  props: {},
  data () {
    return {
      tableList: [],
      tableData: [],
      res: {}
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
      this.$axios.get('http://127.0.0.1:7002/tableData')
        .then(res => {
          // console.log(res)
          this.tableData = res.data.tableData
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
