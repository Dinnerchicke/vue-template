<template>
  <div class="card">
    <el-row :gutter="20">
      <el-col :md="8">
        <el-input v-model="search" placeholder="请输入关键字">
          <!-- @click="showDatas()" -->
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </el-col>
      <el-col :md="10">
        <slot></slot>
      </el-col>
      <!-- <el-col :md="8">
        <el-input v-model="search" placeholder="请输入关键字">
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </el-col> -->
      <el-col :md="4" style="float:right;padding-left:80px">
        <!-- @click="operaApi('创建')" -->
        <el-button type="primary" icon="el-icon-plus">创 建</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  components: {},
  props: {},
  data () {
    return {
      search: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
