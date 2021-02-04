<template functional>
  <!-- 函数式组件 -->
  <div class="">
    <!-- 函数式组件没有响应式数据，官方用法用于选择组件渲染 -->
    {{`base的值:${props.result}`}}
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
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
