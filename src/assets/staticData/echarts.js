export const echart1 = {}

export const echart2 = {
  title: {
    text: '饼图示例'
  },
  angleAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  radiusAxis: {
  },
  polar: {
  },
  series: [{
    type: 'bar',
    data: [1, 2, 3, 4, 3, 5, 1],
    coordinateSystem: 'polar',
    name: 'A',
    stack: 'a',
    emphasis: {
      focus: 'series'
    }
  }, {
    type: 'bar',
    data: [2, 4, 6, 1, 3, 2, 1],
    coordinateSystem: 'polar',
    name: 'B',
    stack: 'a',
    emphasis: {
      focus: 'series'
    }
  }, {
    type: 'bar',
    data: [1, 2, 3, 4, 1, 2, 5],
    coordinateSystem: 'polar',
    name: 'C',
    stack: 'a',
    emphasis: {
      focus: 'series'
    }
  }],
  legend: {
    show: true,
    data: ['A', 'B', 'C']
  }
}

export const echart3 = {
  title: {
    text: '饼图示例'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {value: 1048, name: '搜索引擎'},
        {value: 735, name: '直接访问'},
        {value: 580, name: '邮件营销'},
        {value: 484, name: '联盟广告'},
        {value: 300, name: '视频广告'}
      ]
    }
  ]
}

export const echart4 = {
  title: {
    text: '柱状图示例'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.2)'
    }
  }]
}
