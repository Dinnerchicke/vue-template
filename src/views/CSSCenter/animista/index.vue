<template>
  <div>
    <!-- 选取animista个人觉得值得使用的样式 -->
    <!-- 可以自动代入不同的样式如按钮/图片/文字/背景/svg等 -->
    <el-row :gutter="20" style="margin-top:10px">
      <el-col :md="4">
        <div class="scale-up-center card">scale-up-center</div>
      </el-col>
      <el-col :md="4">
        <div class="rotate-center card">rotate-center</div>
      </el-col>
      <el-col :md="4">
        <div class="rotate-scale-up-ver card">rotate-scale-up-ver</div>
      </el-col>
      <el-col :md="4">
        <div class="flip-horizontal-bottom card">flip-horizontal-bottom</div>
      </el-col>
      <el-col :md="4">
        <div class="flip-2-hor-top-bck card">flip-2-hor-top-bck</div>
      </el-col>
      <el-col :md="4">
        <div class="slide-bottom card">slide-bottom</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="4">
        <div class="slide-bck-center card">slide-bck-center</div>
      </el-col>
      <el-col :md="4">
        <div class="slide-rotate-ver-right card">slide-rotate-ver-right</div>
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
.el-col{
  div {
    background-color:#E6E6FA;
    margin-top:30px;
    border: 1px solid #000;
  }
}
// 将下列内容放入scss的时候不用放到目标项内部,放在外面同级同名即可不然会爆红
.scale-up-center{-webkit-animation:scale-up-center .4s cubic-bezier(.39,.575,.565,1.000) both;animation:scale-up-center .4s cubic-bezier(.39,.575,.565,1.000) both}
@-webkit-keyframes scale-up-center{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-up-center{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}

.rotate-center{animation:rotate-center .6s ease-in-out both}
@keyframes rotate-center{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}

.rotate-scale-up-ver{animation:rotate-scale-up-ver .65s linear both}
@keyframes rotate-scale-up-ver{0%{transform:scale(1) rotateY(0)}50%{transform:scale(2) rotateY(180deg)}100%{transform:scale(1) rotateY(360deg)}}

.flip-horizontal-bottom{animation:flip-horizontal-bottom .4s cubic-bezier(.455,.03,.515,.955) both}
@keyframes flip-horizontal-bottom{0%{transform:rotateX(0)}100%{transform:rotateX(-180deg)}}

.flip-2-hor-top-bck{animation:flip-2-hor-top-bck .5s cubic-bezier(.455,.03,.515,.955) both}
@keyframes flip-2-hor-top-bck{0%{transform:translateY(0) translateZ(0) rotateX(0);transform-origin:50% 0}100%{transform:translateY(-100%) translateZ(-260px) rotateX(180deg);transform-origin:50% 100%}}

.slide-bottom{animation:slide-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
@keyframes slide-bottom{0%{transform:translateY(0)}100%{transform:translateY(100px)}}

.slide-bck-center{animation:slide-bck-center .45s cubic-bezier(.47,0.000,.745,.715) both}
@keyframes slide-bck-center{0%{transform:translateZ(0)}100%{transform:translateZ(-400px)}}

.slide-rotate-ver-right{animation:slide-rotate-ver-right .5s cubic-bezier(.25,.46,.45,.94) both}
@keyframes slide-rotate-ver-right{0%{transform:translateX(0) rotateY(0)}100%{transform:translateX(150px) rotateY(-90deg)}}
</style>
