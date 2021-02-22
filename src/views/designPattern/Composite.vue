<template>
  <div class="">
    <div class="card"><p style="font-size:30px;font-weight:800;font-style:italic">组合模式</p></div>
    <div class="card">
      <p>组合模式就是用树的思想来执行指令</p>
      <p>即按顺序执行子节点而不关心有多少子节点，有多少子节点的子节点等等</p>
    </div>
    <div class="card">
      <p>Tips</p>
      <p>组合模式适合对所有叶节点操作一致的情况</p>
      <p>不适合节点出现在两个不同子节点的情况，因为那样会操作两遍</p>
      <p>可以考虑用职责链模式提高性能，去处理要处理的对象，而不是直接遍历整棵树</p>
    </div>
    <div class="card">
      <button id="button">组合指令按钮</button>
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
    let Composite = function () {
      return {
        commandList: [],
        add: function (command) {
          this.commandList.push(command)
        },
        execute: function () {
          for (let i = 0; i < this.commandList.length; i++) {
            this.commandList[i].execute()
          }
        }
      }
    }

    // 单个指令
    let openACCommand = {
      execute: function () {
        console.log('打开空调')
      }
    }
    let openQQCommand = {
      execute: function () {
        console.log('打开QQ')
      }
    }
    let closeDoorCommand = {
      execute: function () {
        console.log('关门')
      }
    }

    // 二级指令，包含子节点，依然可以运行
    let commandChild = Composite()
    commandChild.add(openACCommand)
    commandChild.add(openQQCommand)

    let command = Composite()
    command.add(openACCommand)
    command.add(openQQCommand)
    command.add(closeDoorCommand)
    command.add(commandChild)
    // eslint-disable-next-line no-unused-vars
    let setCommand = (function (command) {
      let button = document.getElementById('button')
      button.onclick = function () {
        command.execute()
      }
    })(command)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
