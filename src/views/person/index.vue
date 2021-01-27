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
            <img v-if="this.url" :src="this.url" width="120px" height="120px" style="float:left" >
          </el-form-item>
          <el-form-item label="手机号" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ user.phone }}</span>
          </el-form-item>
          <el-form-item label="账号" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ user.accout }}</span>
          </el-form-item>
          <el-form-item label="密码" style="font-weight:bold">
            <!-- <span style="float:left;font-weight:normal">{{ user.accout }}</span> -->
            <el-button type="primary" style="float:left;">修改密码</el-button>
          </el-form-item>
          <el-form-item label="姓名" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ user.name }}</span>
          </el-form-item>
          <el-form-item label="性别" style="font-weight:bold">
            <span style="float:left;font-weight:normal">{{ user.sex }}</span>
          </el-form-item>
          <el-form-item label="角色" style="font-weight:bold">
            <span v-for="(item,key) in user.role" :key="key" style="float:left;font-weight:normal">{{ item.name + " " }}</span>
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
      <el-form-item label="用户头像">
        <el-upload
          :show-file-list="false"
          :on-success="updateAvatarUrl"
          class="avatar-uploader"
          action="http://62.234.98.16/fileserver/fileserver/upload"
        >
          <img v-if="this.url" :src="this.url" class="avatar" width="120px" height="120px">
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
      <el-form-item label="账号" prop="accout">
        <el-input v-model="userForms.accout" placeholder="请输入账号" />
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
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      user: {}, // 用户信息的存储对象
      EditDialog: false,
      userForms: {},
      url: 'http://81.68.73.55/group1/M00/00/08/rBEAA2ALmXqAeyy8AABeLYDLZrg150.png'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
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
</style>
