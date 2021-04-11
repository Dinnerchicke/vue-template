/*
  前端权限思路：
  1.前端自己写出权限映射,后端传来权限等级即可
*/
// 隐藏路由
const main = ['main', 'mainF']

const person = ['person', 'personF']

// 管理员的样例中心
const FM = ['optimizeCenter', 'exampleManage1'] // 优化中心

const SM = ['exampleCenter', 'table', 'echarts'] // 样例中心

const FC = ['CSSCenter', 'baseSass', 'animista'] // 样式中心

const DP = ['designPattern', 'design', 'singleton', 'strategy', 'proxy', 'strategy2', 'pubSub', 'command', 'composite', 'templateMethod', 'flyWeight', 'response', 'mediator', 'decorator', 'state', 'adapter'] // 设计模式

// 经过测试，Array.toString()并不会输出//背后的内容

// 抽离直接使用
const role0 = [
  main,
  ['optimizeCenter', 'example1', 'example2'], // 普通用户的样例
  person
]

const role1 = [
  main,
  FM,
  SM,
  FC,
  DP,
  ['powerManage', 'role', 'user'], // 权限中心
  person
]

const role2 = [
  main,
  FM,
  SM,
  FC,
  DP,
  ['powerManage', 'api', 'auth', 'role', 'user'], // 权限中心
  person
]

export const allRole = {role0, role1, role2}
