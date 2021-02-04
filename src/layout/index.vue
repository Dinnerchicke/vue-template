<template>
  <el-container class="layout-container">
    <el-aside width="auto" class="el-aside">
      <Aside :is-collapse="isCollapse" style="overflow:hidden" />
    </el-aside>
    <el-container>
      <el-header class="el-header navshadow" style="height:50px">
        <i :class="{'el-icon-s-unfold':isCollapse,'el-icon-s-fold':!isCollapse}" style="float:left;padding-top:15px;cursor:pointer" @click="changeCollapse" />
        <breadcrumb />
        <!-- <span style="float:left;padding-left:20px;font-size:16px;color:#92a3b8">xx管理系统</span> -->
        <el-dropdown trigger="click" style="float:right;">
          <span style="display:flex;align-items:center;">
            <img :src="getAvatarUrl" width="35px" height="35px" style="border-radius:20px;margin-right:15px;cursor:pointer" />
            <span style="font-weight:400;color:#8b9baf;cursor:pointer">{{getAccount}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item>设置</el-dropdown-item> -->
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-tooltip effect="dark" :content="fullscreen ? `取消全屏`:`全屏`" placement="bottom" style="float:right;font-size:25px;margin-right:20px;margin-top:14px;cursor:pointer">
          <i class="el-icon-full-screen" @click="handleFullScreen" />
        </el-tooltip>
      </el-header>
      <el-main class="el-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
// import导入的要先放入return{}里才能为之所用
import Aside from './components/SideBar/index'
import breadcrumb from './components/BreadCrumb/index'
export default {
  name: 'layout',
  components: {
    Aside,
    breadcrumb
  },
  data () {
    return {
      avatarUrl: '',
      isCollapse: false,
      fullscreen: false
    }
  },
  created () {
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse
      // console.log(this.isCollapse)
    },
    logout () {
      this.$router.push('/login')
      // window.location.reload()
      this.$store.commit('insertCurrentPage', 'main')
      sessionStorage.clear()
    },
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  },
  computed: {
    ...mapGetters(['getAccount', 'getAvatar']),
    getAvatarUrl () {
      let avatarUrl = this.getAvatar
      return avatarUrl
    }
    // First (studentRouterMapping) {
    //   var F = this.studentRouterMapping.Fname
    //   // console.log(this.studentRouterMapping)
    //   return F
    // },
    // Second (studentRouterMapping) {
    //   var S = this.studentRouterMapping.Sname
    //   return S
    // },
    // Third (studentRouterMapping) {
    //   var T = this.studentRouterMapping.Tname
    //   return T
    // }
    // username () {
    //   const loginState = JSON.parse(sessionStorage.getItem('loginState'))
    //   return loginState.account
    // }
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
    background-color: #f7f7f7;
    color: #333;
    text-align: center;
    /* height: 50px; */
    line-height: 50px;
    /* border: 1px solid red; */
    /* box-shadow:0 3px 4px rgba(0, 21, 41, 0.08); */
    z-index: 20;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center; */
    line-height: 200px;
}
</style>
