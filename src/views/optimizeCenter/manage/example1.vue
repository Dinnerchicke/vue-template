<template>
  <div class="">
    <div class="card">
      <!-- 在App.vue页面用keep-alive缓存页面 -->
      <example2 :result="result" />
      <el-button type="primary" @click="isDisplay = !isDisplay" style="margin:10px">切换显隐</el-button>
      <!--
        使用v-show来代替v-if,因为v-if每次都要重新渲染
        故v-if适用于不经常切换的场景
        v-show适用于经常切换的场景
      -->
      <div v-show="isDisplay">显示为true</div>
      <div v-show="!isDisplay">显示为false</div>
      <!-- 假如会有卡顿的话使用延时渲染优化视觉体验 -->
      <div v-if="defer(10)" style="margin:10px">
        {{`延时渲染mixin`}}
      </div>
    </div>
    <div class="card">
      <!--
        虚拟滚动组件--按需显示数据,具体操作请看:https://github.com/Akryum/vue-virtual-scroller
      -->
      <!-- class="scroller"
      :items="list"
      :item-size="32"
      key-field="id"
      v-slot="{ item }" -->
      <RecycleScroller
      :items="list"
      :item-size="list.length"
      key-field="id"
      v-slot="{ item }">
        <div>{{item}}</div>
      </RecycleScroller>
    </div>
  </div>
</template>

<script>
import defer from '@/mixin/defer.js'
import example2 from './example2'
export default {
  name: '',
  components: {
    example2
  },
  props: [],
  mixins: [defer()],
  data () {
    return {
      // data中定义的数据均为响应式,所以在数据不需要为响应式的时候最好不要放在这
      isDisplay: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 8, 5, 4, 3, 2, 1, 3, 4, 45, 5, 3, 3, 3, 3, 2, 3]
    }
  },
  computed: {
    // 计算属性具有缓存特性，耗时的逻辑只会在第一次渲染时执行
    base () {
      return 10
    },
    result ({ base }) { // 用{ 变量名 }引用this.变量名数据
      // 代替return this.base * this.base * 10
      // 如果反复用this.base,则每次都会调用它的getter,且它是响应式的,每次调用都得有一套逻辑执行
      return base * base * 10
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
