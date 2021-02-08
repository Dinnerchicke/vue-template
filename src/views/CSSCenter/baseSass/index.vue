<template>
  <div class="">
    <el-row>
      <el-col class="card" :md="7" :lg="11">
        <div>
          <span>card1</span>
        </div>
      </el-col>
      <el-col class="card" :md="{span:8,offset:1}" :lg="{span:11,offset:2}">
        <div>
          <span>card2</span>
        </div>
      </el-col>
      <el-col class="card" :md="{span:7,offset:1}" :lg="{span:24,offset:0}">
        <div>
          <span>card3</span>
        </div>
      </el-col>
    </el-row>
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
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
// scss基础
$primary-color: #1269b5; // $变量名: 变量值
span {
  color: #eee;
}
.el-row { // 使用UI组件开发时注意没有那个元素，是用绑定类名的方式
  height: 200px;
  .card{
    background-color: $primary-color;
    div {
      background-color: #000;
      &:hover{
        background-color: #fff;
      }
    }
  }
}
// -------------------------------------------------------------------

// @mixin alert ($text-color, $background) { // 混合
//   color: $text-color;
//   a{
//     color: darken($background, 10%); // darken()让颜色更深
//     // color: lighten($background, 10%); // lighter()让颜色更亮
//   }
// }

// .alert-warning {
//   @include alert(#eee, #eeccee) // 引用mixin
// }

// -------------------------------------------------------------------

// .alert-info {
//   @extend div.box; // 继承样式
//   color: #000; // 自定义样式
// }
</style>
