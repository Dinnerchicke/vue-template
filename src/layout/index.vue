<template>
  <el-container class="layout-container">
    <el-aside width="auto" class="el-aside">
      <Aside :is-collapse="isCollapse" style="overflow:hidden">
        <span slot="title1" style="margin-right:80px">{{First}}</span>
        <span slot="title2">{{Second}}</span>
        <span slot="title3">{{Third}}</span>
      </Aside>
    </el-aside>
    <el-container>
      <el-header class="el-header">
        <i :class="{'el-icon-s-fold':isCollapse,'el-icon-s-unfold':!isCollapse}" style="float:left;padding-top:20px" @click="changeCollapse" />
        <span style="float:left;padding-left:20px">xx管理系统</span>
        <el-dropdown style="float:right;">
          <span style="display:flex;align-items:center;">
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2444650368,3844602910&fm=11&gp=0.jpg" width="40px" height="40px" style="border-radius:20px;margin-right:10px" />
            <span>小美</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="el-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {studentRouterMapping, teacherRouterMapping} from '@/utils/rolesFront.js'
// import导入的要先放入return{}里才能为之所用
import Aside from './components/SideBar/index'
export default {
  name: 'layout',
  components: {
    Aside
  },
  data () {
    return {
      studentRouterMapping,
      teacherRouterMapping,
      isCollapse: false
    }
  },
  created () {
    this.request()
  },
  methods: {
    async request () {
      // console.log(this.$axios)
      // const result = await this.$axios.get('/show')
      // console.log(result)
      // console.log(studentRouterMapping.F)
      // console.log(teacherRouterMapping)
    },
    changeCollapse () {
      this.isCollapse = !this.isCollapse
      // console.log(this.isCollapse)
    }
  },
  computed: {
    First (studentRouterMapping) {
      var F = this.studentRouterMapping.Fname
      console.log(this.studentRouterMapping)
      return F
    },
    Second (studentRouterMapping) {
      var S = this.studentRouterMapping.Sname
      return S
    },
    Third (studentRouterMapping) {
      var T = this.studentRouterMapping.Tname
      return T
    }
  }
}
</script>
<style scoped>
.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.el-container {
  height: 100%;
  width: 100%;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center; */
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
