<template>
  <el-row :gutter="10">
    <el-col :md="24">
      <div class="grid-content bg-purple" style="margin-bottom:10px">
        按钮权限展示
        <el-button type="danger" @click="changeRole">切换角色</el-button>
      </div>
    </el-col>
    <el-col :md="24">
      <div class="grid-content bg-purple-light boxshadow" style="margin-bottom:10px">
        <el-button v-permission="{role:'0'}" type="primary">学生信息1</el-button>
        <el-button v-permission="{role:'0'}" type="primary">学生信息2</el-button>
        <el-button v-permission="{role:'0'}" type="primary">学生信息3</el-button>
        <el-button v-permission="{role:'1'}" type="primary">教师信息1</el-button>
        <el-button v-permission="{role:'1'}" type="primary">教师信息2</el-button>
        <el-button v-permission="{role:'1'}" type="primary">教师信息3</el-button>
      </div>
    </el-col>
    <el-col :md="24"><div class="grid-content bg-purple" style="margin-bottom:10px"></div></el-col>
    <el-col :md="24"><div class="grid-content bg-purple-light"></div></el-col>
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
    // ,
    // requestTest () {
    //   this.$axios.get('/api/test')
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
