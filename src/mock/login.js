var Mock = require('mockjs')
// eslint-disable-next-line no-useless-escape
module.exports = [
  Mock.mock('http://127.0.0.1:7002/api/login/', 'get', {
    'ret': 0,
    'data': {
      'account': 'SAdmin',
      'password': 'SAdmin',
      role: '0'
    // 'mtime': '@datetime' // 随机生成日期时间
    // 'score|1-800': 800, // 随机生成1-800的数字
    // 'rank|1-100': 100, // 随机生成1-100的数字
    // 'stars|1-5': 5, // 随机生成1-5的数字
    // 'nickname': '@cname' // 随机生成中文名字
    }
  }),
  Mock.mock('http://127.0.0.1:7002/api/test/', 'get', {
    'ret': 0,
    'data': {
      data: '123'
    // 'mtime': '@datetime' // 随机生成日期时间
    // 'score|1-800': 800, // 随机生成1-800的数字
    // 'rank|1-100': 100, // 随机生成1-100的数字
    // 'stars|1-5': 5, // 随机生成1-5的数字
    // 'nickname': '@cname' // 随机生成中文名字
    }
  })
]
