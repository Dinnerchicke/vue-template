<template>
  <div class="">
    <div class="card">
      <h3>单一职责原则(SRP)</h3>
      <p><b>定义</b>：引起一个方法改变的动机只能有一个，简而言之就是如果需要修改这个方法的内容，那样的动机只能有一个</p>
      <p><b>为什么？</b>：如果一个方法承担了太多的职责，后期修改这个方法的可能性越大，也越难修改。是低内聚和高耦合的脆弱设计。</p>
      <p><b>什么时候？</b>：并不是所有的职责都需要分离，以下情况可以不用着急分离
        <ol>1. 如果随着需求的变化，有两个职责总是同时改变，那么就没必要分离他们，可以看作同一个职责</ol>
        <ol>2. 即使两个职责已经被耦合在一起，但他们还没有发生改变的征兆，可以等到重构但时候再分离也不迟</ol></p>
      <p><b>优点</b>：降低单个类或者对象的复杂度</p>
      <p><b>缺点</b>：增加代码的复杂度，分离后实际上也增加了对象之间相互联系的难度</p>
    </div>
    <div class="card">
      <h3>最少知识原则(LKP)</h3>
      <p><b>定义</b>：一个实体应该尽可能少的与其他实体发生相互作用。即应该减少对象之间的交互，常见的方法是引入第三者来转发</p>
    </div>
    <div class="card">
      <h3>开放-封闭原则(OCP)</h3>
      <p>定义：实体应该是可以扩展的，但是不可修改</p>
      <p>思路：分离出代码中不可变和可变的地方，运用多态来动态使用他们</p>
      <p>怎么做：有些代码确实不能完全封闭，我们只能做到以下的点
        <ol>1.挑选出最容易发生变化的地方，然后构造抽象来封闭这些变化</ol>
        <ol>2.在不可避免发生修改的时候，尽量修改那些容易修改的地方而不是选择难以修改</ol>
      </p>
    </div>
    <div class="card">
      <h3>接口和面向接口编程</h3>
      <p>思想：面向抽象编程而不是面向实现编程</p>
    </div>
    <div class="card">
      <h3>代码重构</h3>
      <p>以下为重构的手段</p>
      <el-divider></el-divider>
      <h4>提炼函数</h4>
      <p>一个函数过长，需要将函数内的代码提炼出来，有以下好处：</p>
      <ol>1.避免出现超大函数</ol>
      <ol>2.独立出来的函数有助于代码复用</ol>
      <ol>3.独立出来的函数更容易被覆写</ol>
      <ol>4.独立出来的函数如果拥有一个良好的命名，本身就起到了注释的作用</ol>
      <el-divider></el-divider>
      <h4>合并重复的条件片段</h4>
      <el-divider></el-divider>
      <h4>把条件分支语句提炼成函数</h4>
      <p>简而言之就是将长条件提炼成短函数，用函数的名称来当作注释，增加代码可读性</p>
      <el-divider></el-divider>
      <h4>提前让函数退出代替嵌套条件分支</h4>
      <p>没必要遵守“函数只有一个入口和出口的条件”，多个出口也未尝不好</p>
      <el-divider></el-divider>
      <h4>传递对象参数已代替过长的参数列表</h4>
      <p>**在过长参数的函数中**，以对象的竖序排列代替参数的横向排列以增加代码的可读性</p>
      <el-divider></el-divider>
      <h4>尽量减少参数数量</h4>
      <p>因为这样会使这个函数的复用率降低</p>
      <el-divider></el-divider>
      <h4>少用三目运算符</h4>
      <p>可读性太差了</p>
      <el-divider></el-divider>
      <h4>合理使用链式调用</h4>
      <p>不要习惯于链式调用即类似new User().setId(123).setName('aaa')</p>
      <p>因为一旦出问题很难追踪错误</p>
      <p>如果该链稳定的话无可厚非，但是如果很容易发生变化的话，建议使用普通调用模式</p>
      <el-divider></el-divider>
      <h4>用return退出多重循环</h4>
      <p>因为用break的话可读性很差，很难分辨跳到哪一层循环了，而用return的话就很容易读懂</p>
      <p>如果return以后还有要执行的内容，可以通过在外面声明函数，里面放要执行的代码</p>
      <p>类似return thisFunction()的方式来执行最后的函数</p><br>
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
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
