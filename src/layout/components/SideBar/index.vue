<template>
  <el-menu
    class="menu"
    :default-active="currentPage"
    background-color="#2e3f53"
    text-color="#b9c5d2"
    router
    :collapse-transition=false
    :collapse="isCollapse"
    style="height:100%;"
    active-text-color="#3e99d5">
    <!-- v-if="routerMain==='main'" -->
    <!-- 首先判断是不是hidden项目，如果不是才才进入循环 -->
    <div v-for="item in routerGet" :key="item.id" v-if="(item.hidden==undefined) && (routerMapping.toString().indexOf(item.name)!==-1)">
      <!-- 循环判断假如有children则进入上面，否则进入下面 -->
      <el-menu-item v-if="item.children.length === 1" :index="item.children[0].name">
        <i :class="item.meta.icon" style="" />
        <span style="margin-right:70px;margin-left:10px">{{item.meta.name}}</span>
      </el-menu-item>

      <el-submenu v-else :index="item.name">
        <template slot="title">
          <i :class="item.meta.icon" />
          <span style="margin-right:70px;padding-left:10px">{{item.meta.name}}</span>
        </template>
        <el-menu-item :index="items.name" v-for="items in item.children" v-if="(items.hidden==undefined) && (routerMapping.toString().indexOf(items.name)!==-1)" :key="items.id">
          {{items.meta.name}}
        </el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
import { allRole } from '@/router/rolesFront.js'
export default {
  name: 'Aside',
  components: {},
  props: ['is-collapse'],
  data () {
    return {
      allRole,
      routerGet: {},
      routerMapping: {}
    }
  },
  computed: {
    currentPage () {
      // console.log(this.$store.getters.getCurrentPage)
      return this.$store.getters.getCurrentPage
    }
    // hasPermission (item) {
    //   console.log(item)
    //   // let obj = {
    //   //   a: 'name'
    //   // }
    //   // console.log(Object.toString())
    //   console.log()
    //   // eslint-disable-next-line no-unneeded-ternary
    //   return this.routerGet.indexOf(item) !== -1 ? true : false
    // }
  },
  watch: {},
  beforeCreate () {
    // this.roleinit()
  },
  created () {
    // this.roleinit()
  },
  mounted () {
    this.roleinit()
    this.routerinit()
  },
  methods: {
    // handleOpen (key, keyPath) {
    //   console.log(key, keyPath)
    // },
    // handleClose (key, keyPath) {
    //   console.log(key, keyPath)
    // }
    routerinit () {
      this.routerGet = this.$router.options.routes
      // console.log(this.routerGet)
    },
    roleinit () {
      // 假如role的权限为0,则使用学生权限,反之使用管理员权限
      // console.log(this.studentRouterMapping)
      const roleState = this.$store.getters.getRole
      // if (roleState === '0') {
      //   this.routerMapping = this.studentRouterMapping
      // } else if (roleState === '1') {
      //   this.routerMapping = this.teacherRouterMapping
      // }
      this.routerMapping = this.allRole['role' + roleState]
      // console.log(JSON.stringify(this.routerMapping))
    }
  }
}
</script>

<style scoped>
/* .menu {
  overflow-y:scroll;
} */
 /* .menu::-webkit-scrollbar{
    width: 0 !important;
} */

/* 改侧边栏以后会出现bug */
.el-menu--collapse >>> .el-menu-item span{
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
.el-menu--collapse >>> .el-submenu__title span{
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
.el-menu--collapse >>> .el-submenu__icon-arrow{
  display: none;
}
</style>
