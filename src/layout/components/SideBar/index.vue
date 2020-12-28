<template>
  <el-menu
    class="menu"
    default-active="main"
    background-color="#2e3f53"
    text-color="#b9c5d2"
    router
    :collapse-transition=false
    :collapse="isCollapse"
    style="height:100%;"
    active-text-color="#3e99d5">
    <el-menu-item index="main">
      <i class="el-icon-s-home"></i>
      <span style="margin-right:70px">首页</span>
        <!-- <slot name="title1">导航一</slot> -->
        <!-- <span slot="title1">导航一</span> -->
    </el-menu-item>
    <el-submenu :index="item.id+''" v-for="item in routerMapping" :key="item.id">
      <template slot="title">
        <i :class="item.icon"></i>
        <span style="margin-right:70px">{{item.name}}</span>
        <!-- <slot name="title1">导航一</slot> -->
        <!-- <span slot="title1">导航一</span> -->
      </template>
      <!-- <el-menu-item-group title="学生">
        <template slot="title1">分组一</template> -->
      <el-menu-item :index="items.routerName" v-for="items in item.data" :key="items.id">{{items.name}}</el-menu-item>
        <!-- <el-menu-item index="getInformation">查看信息</el-menu-item>
        <el-menu-item index="changeLicence">修改学籍</el-menu-item> -->
      <!-- </el-menu-item-group> -->
      <!-- <el-menu-item-group title="管理员">
        <el-menu-item index="insertInformation">添加学生信息</el-menu-item>
        <el-menu-item index="delInformation">删除学生信息</el-menu-item>
        <el-menu-item index="changeInformation">修改学生信息</el-menu-item>
      </el-menu-item-group> -->
      <!-- <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu> -->
    </el-submenu>
    <!-- <el-menu-item index="/courseManage">
      <i class="el-icon-menu"></i>
      <slot name="title2">导航二</slot>
    </el-menu-item>
    <el-menu-item index="/scoreManage">
      <i class="el-icon-document"></i>
      <slot name="title3">导航三</slot>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
import {studentRouterMapping, teacherRouterMapping} from '@/utils/rolesFront.js'
export default {
  name: 'Aside',
  components: {},
  props: ['is-collapse'],
  data () {
    return {
      studentRouterMapping,
      teacherRouterMapping,
      routerMapping: {}
    }
  },
  computed: {},
  watch: {},
  beforeCreate () {
    // this.roleinit()
  },
  created () {
    // this.roleinit()
  },
  mounted () {
    this.roleinit()
  },
  methods: {
    // handleOpen (key, keyPath) {
    //   console.log(key, keyPath)
    // },
    // handleClose (key, keyPath) {
    //   console.log(key, keyPath)
    // }
    roleinit () {
      // 假如role的权限为0,则使用学生权限,反之使用管理员权限
      // console.log(this.studentRouterMapping)
      const roleState = this.$store.getters.getRole
      if (roleState === '0') {
        this.routerMapping = this.studentRouterMapping
      } else if (roleState === '1') {
        this.routerMapping = this.teacherRouterMapping
      }
      // console.log(this.routerMapping)
    }
  }
}
</script>

<style scoped>
</style>
