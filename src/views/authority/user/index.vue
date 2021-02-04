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
    @editData="editData" >
      <!-- 使用作用域插槽绑定数据 -->
      <template slot="tableColumn">
        <!-- :src="scope.row.avatarUrl" -->
        <!-- {{scope}} -->
        <img :src="scope.avatarUrl"  alt style="width: 50px;height: 50px" slot-scope="scope" />
      </template>
      <template slot="formItem">
        <el-upload
          :show-file-list="false"
          :on-success="operaAvatarUrl"
          class="avatar-uploader"
          action="http://81.68.73.55/fileserver/fileserver/upload"
        >
          <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" >
          <i v-else class="el-icon-plus avatar-uploader-icon" /> -->
          <i class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </template>
    </table-content>
  </div>
</template>

<script>
import '@/mock/default.js'
import { userOperaList as operaList } from '@/assets/staticData/operaList.js'
import { userTableList as tableList } from '@/assets/staticData/tableList.js'
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
    display (data) {
      console.log(data)
    },
    operaAvatarUrl (file) {
      if (file.code === 200) {
        this.imageUrl = file.result.addr
        this.operaForm.avatarUrl = file.result.addr
        this.$message({
          message: '用户头像上传成功',
          type: 'success',
          center: true
        })
      } else {
        this.$message.error({
          message: '用户头像上传失败',
          center: true
        })
      }
    },
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
      this.$axios.get('http://127.0.0.1:7002/userData')
        .then(res => {
          // console.log(res.data.tableData[0].avatarUrl)
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
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
  }
</style>
