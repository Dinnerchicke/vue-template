<template>
  <el-menu
    default-active="/"
    background-color="#545c64"
    text-color="#fff"
    router
    :collapse-transition=false
    :collapse="isCollapse"
    style="height:100%;"
    active-text-color="#ffd04b">
    <el-submenu index="/rollManage">
      <template slot="title">
        <i class="el-icon-location"></i>
        <slot name="title1">导航一</slot>
        <!-- <span slot="title1">导航一</span> -->
      </template>
      <el-menu-item-group>
        <template slot="title1">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <!-- <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu> -->
    </el-submenu>
    <el-menu-item index="/courseManage">
      <i class="el-icon-menu"></i>
      <slot name="title2">导航二</slot>
      <!-- <span slot="title2">导航二</span> -->
    </el-menu-item>
    <el-menu-item index="/scoreManage">
      <i class="el-icon-document"></i>
      <slot name="title3">导航三</slot>
      <!-- <span slot="title3">导航三</span> -->
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  components: {},
  props: ['is-collapse'],
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // handleOpen (key, keyPath) {
    //   console.log(key, keyPath)
    // },
    // handleClose (key, keyPath) {
    //   console.log(key, keyPath)
    // }
  }
}
</script>

<style scoped>
</style>
