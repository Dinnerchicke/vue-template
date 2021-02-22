<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">命令模式</p></div>
    <div class="card">
      <p>命令模式：有时候不知道任务接收者是谁，为了减少发送者和接收者的耦合度，即避免类似一个发送者一个接收者然后写重复代码的情况</p><br>
      <p>在这个例子中将button和方法解耦，用setCommand方法将其联系起来</p>
    </div>
    <div class="card">
      <p>就像一个大饭店里有很多厨师，客户把菜单提交给服务员，服务员去提交给厨师。</p>
      <p>当然，选择的是空闲的厨师，不然就会出现厨师得亲自去问客户需要什么菜品或者客户亲自去找厨师的窘境</p>
      <p>这个服务员需要<b>主动</b>向客人索要菜单并立即给厨师送去</p>
    </div>
    <div class="card">
      <button id="1">Button1</button>
      <button id="2">Button2</button>
      <button id="3">Button3</button>
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
    // 获取button按钮
    let button1 = document.getElementById('1')
    let button2 = document.getElementById('2')
    let button3 = document.getElementById('3')

    // // 普通实现
    // // 创建函数
    // let button1Fun = new Event()
    // let button2Fun = new Event()
    // let button3Fun = new Event()
    // button1Fun.execute = function () {
    //   console.log('按钮1被点击')
    // }
    // button2Fun.execute = function () {
    //   console.log('按钮2被点击')
    // }
    // button3Fun.execute = function () {
    //   console.log('按钮3被点击')
    // }

    // 将按钮和方法联系起来
    let setCommand = function (button, fun) {
      button.onclick = () => {
        fun.execute()
      }
    }
    // 命令模式对象
    let Event = function (receiver) {
      return {
        execute: function () {
          receiver.execute()
        }
      }
    }

    // 闭包实现
    let button1Fun = {
      execute: function () {
        console.log('按钮1被点击')
      }
    }
    let button2Fun = {
      execute: function () {
        console.log('按钮2被点击')
      }
    }
    let button3Fun = {
      execute: function () {
        console.log('按钮3被点击')
      }
    }

    let button1Command = Event(button1Fun)
    let button2Command = Event(button2Fun)
    let button3Command = Event(button3Fun)

    // 安装方法
    setCommand(button1, button1Command)
    setCommand(button2, button2Command)
    setCommand(button3, button3Command)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
