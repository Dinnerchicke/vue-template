<template>
  <el-row >
    <el-col :md="24" class="card" style="height:100px">
      <!-- 按钮权限展示 -->
      <el-button type="danger" @click="changeRole">切换角色</el-button>
    </el-col>
    <el-col :md="24" class="card" style="height:100px">
      <el-button v-permission="{role:'0'}" type="primary">用户信息</el-button>
      <el-button v-permission="{role:'1'}" type="primary">管理员信息</el-button>
      <el-button v-permission="{role:'2'}" type="primary">超级管理员信息</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {
    // this.requestTest()
    // this.test()
  },
  mounted () {},
  methods: {
    changeRole () {
      const loginState = JSON.parse(sessionStorage.getItem('loginState'))
      console.log(loginState)
      if (loginState.role === '0') {
        loginState.role = '1'
      } else if (loginState.role === '1') {
        loginState.role = '0'
      }
      const changedLoginState = JSON.stringify(loginState)
      sessionStorage.setItem('loginState', changedLoginState)
      window.location.reload()
    }
    // test () {
    //   console.log(this.$md5('value'))
    // }
    // requestTest () {
    //   this.$axios.post('/User/Login', {
    //     Account: '123456',
    //     Password: 'admin',
    //     Authority: 'student'
    //   })
    //     .then(res => {
    //       console.log(res)
    //     }, err => {
    //       console.log(err)
    //     })
    // }
  }
}
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
