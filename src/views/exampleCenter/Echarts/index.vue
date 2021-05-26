<template>
  <div class="">
    <h1>Render</h1>
    <render tag="h3"></render>
  </div>
</template>

<script>
import render from './render'
export default {
  name: '',
  components: {
    render
  },
  props: [],
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {
    // this.arrGet()
  },
  mounted () {},
  methods: {
    // arrGet () {
    //   let arr = [
    //     'ccc', 3, 4, 5, // aaa
    //     ['aaa', 'bbb'] // power
    //   ]
    //   console.log(arr.includes('ccc'))
    //   console.log(arr.toString())
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>
