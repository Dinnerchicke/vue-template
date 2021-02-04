<template>
  <div class="card">
    <div style="float:right;z-index:10">
      <el-button type="primary" icon="el-icon-edit" circle @click="Toedit" />
    </div>
    <div style="margin-top:40px;padding:10px">
      <el-form
          ref="user"
          :model="user"
          label-width="200px"
          class="demo-ruleForm"
          label-position="left"
        >
          <el-form-item label="头像" style="font-weight:bold">
            <img :src="user.avatarUrl" width="120px" height="120px" style="float:left" >
          </el-form-item>
          <el-form-item label="手机号" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ user.phone }}</span>
          </el-form-item>
          <el-form-item label="账号" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ user.account }}</span>
          </el-form-item>
          <el-form-item label="密码" style="font-weight:bold">
            <el-button type="primary" style="float:left;">修改密码</el-button>
          </el-form-item>
          <el-form-item label="姓名" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ user.name }}</span>
          </el-form-item>
          <el-form-item label="性别" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ user.sex }}</span>
          </el-form-item>
          <el-form-item label="角色" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ roleName }}</span>
          </el-form-item>
        </el-form>
    </div>
    <el-dialog
       :modal-append-to-body='false'
      center
      title="修改信息"
      :visible.sync="EditDialog"
      width="60%"
      style="opacity: 1"
    >
    <el-form :model="userForms" label-width="100px" label-position="left">
      <el-form-item label="用户头像" align="center">
        <el-upload
          :show-file-list="false"
          :on-success="updateAvatarUrl"
          class="avatar-uploader"
          action="http://62.234.98.16/fileserver/fileserver/upload"
        >
          <img v-if="userForms.avatarUrl" :src="userForms.avatarUrl" class="avatar" width="120px" height="120px">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="userForms.name" placeholder="请输入用户的真实姓名" />
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model.number="userForms.phone" placeholder="请输入用户的手机" />
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="userForms.sex" placeholder="请选择用户的性别">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="账号" prop="account">
        <el-input v-model="userForms.account" placeholder="请输入账号" />
      </el-form-item>
        <el-form-item >
          <el-button  type="primary"
            >立即修改</el-button>
          <el-button
            @click="resetForm()"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      user: {}, // 用户信息的存储对象
      EditDialog: false,
      userForms: {}
      // url: 'http://81.68.73.55/group1/M00/00/08/rBEAA2ATWUGAMYJkAAB5enkaJqY630.jpg'
    }
  },
  computed: {
    ...mapGetters(['getLoginState']),
    roleName () {
      let role = this.user.role
      if (role === '0') {
        return '普通用户'
      } else if (role === '1') {
        return '管理员'
      } else {
        return '超级管理员'
      }
    }
  },
  watch: {},
  created () {
    this.renderAccount()
  },
  mounted () {},
  methods: {
    renderAccount () {
      this.user = this.getLoginState
      this.userForms = this.user
      // console.log(this.user)
    },
    Toedit () {
      this.EditDialog = true
    },
    updateAvatarUrl (file) {
      if (file.code === 200) {
        this.userForms.avatarUrl = file.result.addr
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
    // 重置表单
    resetForm () {
      this.userForms = {}
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
