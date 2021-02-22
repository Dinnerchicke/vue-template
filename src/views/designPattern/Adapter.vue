<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">适配器模式</p></div>
    <div class="card">
      <p>适配器模式适用于当两个对象的接口对不上时，用一个方法去转换其名称或者格式等</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    let googleMap = {
      show: function () {
        console.log('google')
      }
    }
    let baiduMap = {
      display: function () {
        console.log('baidu')
      }
    }
    let baiduMapAdapter = {
      show: function () {
        return baiduMap.display()
      }
    }
    googleMap.show()
    baiduMapAdapter.show()
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
