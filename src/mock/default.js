var Mock = require('mockjs')
const Random = Mock.Random
const exampleData = []
for (let i = 0; i < 100; i++) {
  const template = {
    // 'Boolean': Random.boolean, // 可以生成基本数据类型
    // 'Natural': Random.natural(1, 10), // 生成1到100之间自然数
    // 'Integer': Random.integer(1, 100), // 生成1到100之间的整数
    // 'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    // 'Character': Random.character(), // 生成随机字符串,可加参数定义规则
    // 'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
    // 'Range': Random.range(0, 10, 2), // 生成一个随机数组
    // 'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    // 'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
    // 'Color': Random.color(), // 生成一个颜色随机值
    // 'Paragraph': Random.paragraph(2, 5), // 生成2至5个句子的文本
    'name': Random.name(), // 生成姓名
    'url': Random.url(), // 生成web地址
    'type': Random.string(2, 10),
    'method': Random.string(2, 10),
    'description': Random.string(30, 40)
    // 'Address': Random.province() // 生成地址
  }
  exampleData.push(template)
  // console.log(exampleData)
}

Mock.mock('http://127.0.0.1:7002/api/login/', 'get', {
  'ret': 0,
  'data': {
    'name': 'admin',
    'account': 'admin',
    'password': 'admin',
    role: '1',
    avatarUrl: 'http://81.68.73.55/group1/M00/00/0A/rBEAA2AbtSqAdHgzAAAiTNpdZb8851.jpg',
    phone: 18888888888,
    sex: 'middle'
  // 'mtime': '@dateTime' // 随机生成日期时间
  // 'score|1-800': 800, // 随机生成1-800的数字
  // 'rank|1-100': 100, // 随机生成1-100的数字
  // 'stars|1-5': 5, // 随机生成1-5的数字
  // 'nickname': '@cname' // 随机生成中文名字
  }
})

Mock.mock('http://127.0.0.1:7002/exampleData', 'post', (params) => {
  let info = JSON.parse(params.body)
  let [index, size, total] = [info.currentPage, info.pageSize, exampleData.length]
  let len = total / size
  let totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
  let newData = exampleData.slice((index - 1) * size, index * size)
  return {
    'ret': '0',
    'data': {
      'pageIndex': index,
      'pageSize': size,
      'rows': newData,
      'total': total,
      'totalPages': totalPages
    }
  }
})

Mock.mock('http://127.0.0.1:7002/tableData', 'get', {
  'ret': 0,
  tableData: [
    {
      _id: 1,
      name: 'test1',
      url: 'test',
      method: 'GET',
      type: 'test',
      description: '这是默认页面显示内容'
    }, {
      _id: 2,
      name: 'test2',
      url: 'test',
      method: 'GET',
      type: 'test',
      description: '这是默认页面显示内容'
    }
  ]
})

Mock.mock('http://127.0.0.1:7002/userData', 'get', {
  'ret': 0,
  tableData: [
    {
      _id: 1,
      name: 'test1',
      sex: 'test',
      phone: 'GET',
      role: 'test',
      avatarUrl: 'http://81.68.73.55/group1/M00/00/08/rBEAA2ALmXqAeyy8AABeLYDLZrg150.png'
    }, {
      _id: 2,
      name: 'test1',
      sex: 'test',
      phone: 'GET',
      role: 'test',
      avatarUrl: 'http://81.68.73.55/group1/M00/00/08/rBEAA2ALmXqAeyy8AABeLYDLZrg151.png'
    }
  ]
})

Mock.mock('http://127.0.0.1:7002/addRes', 'get', {
  'ret': 0,
  data: {
    'errno': 1000
  }
})

Mock.mock('http://127.0.0.1:7002/editRes', 'get', {
  'ret': 0,
  data: {
    'errno': 1000
  }
})

Mock.mock('http://127.0.0.1:7002/delRes', 'get', {
  'ret': 0,
  data: {
    'errno': 1000
  }
})
