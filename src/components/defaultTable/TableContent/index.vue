<template>
  <div>
    <div class="card">
      <el-row :gutter="20">
        <el-col :md="8">
          <el-input v-model="search" placeholder="请输入关键字">
            <!-- @click="showDatas()" -->
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </el-col>
        <el-col :md="10">
          <slot></slot>
        </el-col>
        <el-col :md="4" style="float:right;padding-left:80px">
          <el-button type="primary" icon="el-icon-plus" @click="handleData('添加')">创 建</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="card">
      <el-table
        v-loading="loadingState"
        ref="filterTable"
        :data="tableData"
        :header-cell-style="getRowClass"
        border
      >
      <el-table-column :width="item.width" v-for="item in tableList" :key="item.id" :prop="item.prop" :label="item.name" align="center">
        <template slot-scope="scope">
          {{scope.row[scope.column.property]}}
        </template>
      </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button-group>
              <!-- scope.$index, -->
              <el-button
                size="mini"
                type="primary"
                @click="handleData('编辑', scope.$index)"
              >编辑</el-button>
              <el-button size="mini" type="danger" @click="deleteData(scope.row)">删除</el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
      <div
        v-if="tableData.length !== 0"
        style="display: flex; flex-direction: row-reverse; margin-top: 10px"
      >
        <el-pagination
          :current-page="currentPage"
          :page-size="pageSize"
          :total="count"
          :page-sizes="[10, 20, 50, 100]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <el-dialog :modal-append-to-body='false' :visible.sync="operaDialog" :title="dialogTitle">
        <!-- :rules="rules" -->
      <el-form
        ref="operaForm"
        :model="operaForm"
        label-width="100px"
      >
        <el-form-item v-for="item in operaList" :key="item.id" :prop="item.prop" :label="item.label">
          <el-input v-model="operaForm[item.prop]" :placeholder="item.placeholder" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </div>
    </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['tableList', 'tableData', 'res', 'operaList'],
  data () {
    return {
      loadingState: false,
      operaDialog: false,
      dialogTitle: '',
      rules: [],
      operaForm: {}, // operaForm并不需要父子组件传值，只需要传给父组件内容就行了
      pageSize: 10, // 分页的页面大小
      count: 0, // 分页的数据总数
      currentPage: 1, // 分页的当前页
      search: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // 接口调用
    handleData (handle, index) { // 增和改用同一套页面
      if (handle === '添加') { // 增接口调用
        this.operaForm = {}
        this.opera = 'add'
      } else if (handle === '编辑') { // 改接口调用
        this.operaForm = JSON.parse(JSON.stringify(this.tableData[index]))
        this.updateIndex = index
        this.opera = 'update'
      }
      this.operaDialog = true
      this.dialogTitle = handle
    },
    submitForm () {
      this.$refs.operaForm.validate(async valid => {
        if (valid) {
          if (this.opera === 'add') {
            // 这里获取到res以后保存
            this.$emit('addData', this.operaForm)
            // 设置为异步任务,不然就会在emit之前输出
            setTimeout(() => {
              // console.log(this.res.data)
              if (this.res.data.errno === 1000) {
                this.apiLoading = true
                this.getDatas()
                this.operaDialog = false
                this.apiLoading = false
                this.$message({
                  center: true,
                  message: '添加成功',
                  type: 'success'
                })
              } else {
                this.$message.error({
                  center: true,
                  message: this.res.errmsg
                })
              }
            }, 100)
          } else {
            // 设置为异步任务,不然就会在emit之前输出
            this.$emit('editData', this.operaForm._id, this.operaForm)
            // while (this.res.data === undefined) { sleep }
            setTimeout(() => {
              if (this.res.data.errno === 1000) {
                this.tableData.splice(Number(this.updateIndex), 1, this.operaForm)
                this.operaDialog = false
                this.$message({
                  center: true,
                  message: '修改成功',
                  type: 'success'
                })
              } else if (this.res.errno === 1022) {
                this.$message.error({
                  center: true,
                  message: '该内容不存在,请刷新后重试'
                })
              } else {
                this.$message.error({
                  center: true,
                  message: this.res.errmsg
                })
              }
            }, 100)
          }
        } else {
          this.$message({
            showClose: true,
            message: '请根据要求将信息填写完整',
            type: 'warning'
          })
        }
      })
    },
    getDatas () { // 查：分页用的查询
      let searchName = 'name'
      let search = this.search
      const params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        search: search,
        searchName: searchName
      }
      this.$emit('getData', params)
    },
    deleteData (data) { // 删：删除
      this.$confirm('此操作将永久删除该api, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$emit('deleteData', data)
          setTimeout(() => {
            if (this.res.data.errno === 1000) {
              this.apiLoading = true
              this.getDatas()
              this.apiLoading = false
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            } else {
              this.$message.error({
                center: true,
                message: this.res.errmsg
              })
            }
          }, 100)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    // 基本组件控制
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background: rgb(240,245,250);color:black '
      } else {
        return ''
      }
    },
    handleSizeChange (value) { // 改变页面大小
      this.apiLoading = true
      this.pageSize = value
      this.getDatas()
    },
    handleCurrentChange (value) { // 改变页数
      this.apiLoading = true
      this.currentPage = value
      this.getDatas()
    },
    resetForm () { // 重置按钮
      this.$refs.operaForm.resetFields()
    },
    checkStr (str) { // 检验字符串长度是否为0
      if (str.length === 0) return true
      else return false
    }
  }
}
</script>

<style scoped>
</style>
