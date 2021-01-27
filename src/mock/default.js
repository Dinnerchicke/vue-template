var Mock = require('mockjs')
// eslint-disable-next-line no-useless-escape
Mock.mock('http://127.0.0.1:7002/api/login/', 'get', {
  'ret': 0,
  'data': {
    'name': 'admin',
    'account': 'admin',
    'password': 'admin',
    role: '2'
  // 'mtime': '@dateTime' // 随机生成日期时间
  // 'score|1-800': 800, // 随机生成1-800的数字
  // 'rank|1-100': 100, // 随机生成1-100的数字
  // 'stars|1-5': 5, // 随机生成1-5的数字
  // 'nickname': '@cname' // 随机生成中文名字
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
