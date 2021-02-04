<template>
  <div class="">
    <el-breadcrumb separator=">" style="float:left;margin-left:20px;padding-top:19px;">
      <el-breadcrumb-item class="el-bread-one" v-for="item in breadList" :key="item.path">
        <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  components: {},
  props: {},
  data () {
    return {
      breadList: null
    }
  },
  computed: {
  },
  watch: {
    $route () {
      this.getBreadList()
    }
  },
  created () {
    this.getBreadList()
  },
  mounted () {},
  methods: {
    getBreadList () {
      // console.log(this.$route.matched)
      let match = this.$route.matched.filter(item => item.meta.title)
      const first = match[0]
      // console.log(first.path)
      if (first && first.path.trim().toLocaleLowerCase() !== '/main'.toLocaleLowerCase()) {
        match = [{path: '/main', meta: { title: 'Dashboard' }}].concat(match)
      }
      this.breadList = match
    }
  }
}
</script>

<style scoped>
  .el-bread-one>>>.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    font-weight: 400;
    font-size: 14px;
    color: #8b9baf;
  }
  .el-bread-one>>>.el-breadcrumb__item:last-child
  .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child
  .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child
  .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child
  .el-breadcrumb__inner:hover{
    font-weight: 800;
    font-size: 14px;
    color: #000;
  }
</style>
