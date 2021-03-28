<template>
  <div>
    <div class="card">
      <h1>WebSocket后端推送</h1>
    </div>

    <div class="card">
      <el-row :gutter="40">
        <el-col :md="21"><el-input placeholder="请输入发送内容" v-model="input" clearable></el-input></el-col>
        <el-col :md="2"><el-button type="primary">发送请求</el-button></el-col>
      </el-row>
    </div>

    <div class="card">
      <el-table :data="receiveData" border style="width: 100%" default-sort="descending">
        <!-- <el-table-column
          label="序号"
          type="index"
          align="center"
          width="100" /> -->
        <el-table-column prop="type" label="数据类型" width="100" align="center"></el-table-column>
        <el-table-column prop="msg" label="数据内容" align="center"> </el-table-column>
        <el-table-column prop="time" label="时间" width="200" align="center"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      input: '',
      receiveData: [],
      socket: {}
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    let button = document.getElementsByClassName('el-button')[0]
    let input = document.getElementsByClassName('el-input__inner')[0]
    let url = 'ws://localhost:9010'
    let socket = new WebSocket(url)
    this.socket = socket
    socket.addEventListener('open', function () {
      console.log('新用户已连接')
    })
    button.addEventListener('click', function () {
      let value = input.value
      socket.send(value)
    })

    socket.addEventListener('message', (message) => {
      // let divChild = document.createElement('div')
      // divChild.innerText = JSON.parse(message.data).msg
      // container.appendChild(divChild)
      this.receiveData.unshift(JSON.parse(message.data))
    })
  },
  // 导航守卫，跳转之前关闭socket连接
  beforeRouteLeave (to, from, next) {
    this.socket.close()
    next()
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
