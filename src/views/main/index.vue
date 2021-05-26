<template>
  <div>
    <div style="margin-top:20px;">
      <PanelGroup />
    </div>
    <!-- <el-row>
      <el-col :span="24" class="card" style="height:80px">
        <el-button type="danger" @click="changeRole">切换角色</el-button>
        <el-button v-permission="{role:'0'}" type="primary">用户信息</el-button>
        <el-button v-permission="{role:'1'}" type="primary">管理员信息</el-button>
        <el-button v-permission="{role:'2'}" type="primary">超级管理员信息</el-button>
      </el-col>
    </el-row> -->
    <el-row>
      <el-col :span="24" class="card" style="height:565px" id="echart1" />
      <el-col :sm="{span:11}" :lg="7" class="card" style="height:400px">
        <div id="echart2" style="height:400px;width:100%" />
      </el-col>
      <el-col :sm="{span:11,offset:2}" :lg="{span:8,offset:1}" class="card" style="height:400px">
        <div id="echart3" style="height:400px;width:100%" />
      </el-col>
      <el-col :sm="{span:24}" :lg="{span:7,offset:1}" class="card" style="height:400px">
        <div id="echart4" style="height:400px;width:100%" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from '@/components/PanelGroup/index'
import { echart2, echart3, echart4 } from '@/assets/staticData/echarts.js'
import '@/assets/echartsTheme/westeros.js'
export default {
  name: '',
  components: {
    PanelGroup
  },
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {
    // this.requestTest()
    // this.test()
  },
  mounted () {
    this.$nextTick(function () {
      this.chartsInit()
    })
  },
  methods: {
    chartsInit () {
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }
      // 导入echarts主题出现Echarts is not loaded,将js文件里的root.echarts改成echarts,然后import echarts from 'echarts'
      let myChart1 = this.$echarts.init(document.getElementById('echart1'), 'westeros')
      myChart1.setOption(
        {
          title: {
            text: '柱状图动画延迟'
          },
          grid: {
            top: '8%',
            right: '3%',
            bottom: '10%',
            left: '5%'
          },
          legend: {
            data: ['bar', 'bar2']
          },
          toolbox: {
            // y: 'bottom',
            feature: {
              magicType: {
                type: ['stack', 'tiled']
              },
              dataView: {},
              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            splitLine: {
              show: false
            }
          },
          yAxis: {
          },
          series: [{
            name: 'bar',
            type: 'bar',
            data: data1,
            emphasis: {
              focus: 'series'
            },
            animationDelay: function (idx) {
              return idx * 10
            }
          }, {
            name: 'bar2',
            type: 'bar',
            data: data2,
            emphasis: {
              focus: 'series'
            },
            animationDelay: function (idx) {
              return idx * 10 + 100
            }
          }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 5
          }})
      let myChart2 = this.$echarts.init(document.getElementById('echart2'), 'westeros')
      myChart2.setOption(echart2)
      let myChart3 = this.$echarts.init(document.getElementById('echart3'), 'westeros')
      myChart3.setOption(echart3)
      let myChart4 = this.$echarts.init(document.getElementById('echart4'), 'westeros')
      myChart4.setOption(echart4)
      setTimeout(function () {
        window.onresize = function () {
          myChart1.resize()
          myChart2.resize()
          myChart3.resize()
          myChart4.resize()
        }
      }, 500)
    },
    changeRole () {
      const loginState = JSON.parse(sessionStorage.getItem('loginState'))
      console.log(loginState)
      if (loginState.role === '0') {
        loginState.role = '2'
      } else if (loginState.role === '1') {
        loginState.role = '0'
      } else {
        loginState.role = '1'
      }
      const changedLoginState = JSON.stringify(loginState)
      sessionStorage.setItem('loginState', changedLoginState)
      window.location.reload()
    }
    // test () {
    //   console.log(this.$md5('value'))
    // }
    // requestTest () {
    //   this.$axios.post('/User/Login', {
    //     Account: '123456',
    //     Password: 'admin',
    //     Authority: 'student'
    //   })
    //     .then(res => {
    //       console.log(res)
    //     }, err => {
    //       console.log(err)
    //     })
    // }
  }
}
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
