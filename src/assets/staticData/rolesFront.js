/*
  前端权限思路：
  1.前端自己写出权限映射,后端传来权限等级即可
*/
// 隐藏路由
const main = {
  id: 11,
  routerName: 'main',
  FatherName: 'mainF'
}
const person = {
  id: 21,
  routerName: 'person',
  FatherName: 'personF'
}

// 管理员的样例中心
const FM = {
  name: 'optimizeCenter',
  data: [
    { id: 11,
      routerName: 'exampleManage1'}]
}

const SM = {
  name: 'exampleCenter',
  data: [
    { id: 11,
      routerName: 'table'},
    { id: 12,
      routerName: 'echarts'}]
}

const FC = {
  name: 'CSSCenter',
  data: [
    { id: 11,
      routerName: 'baseSass'},
    { id: 12,
      routerName: 'animista'}]
}

// 抽离直接使用
const role0 = {
  // Hide,
  main,
  F: {
    name: 'optimizeCenter',
    data: [
      { id: 11,
        routerName: 'example1'},
      { id: 12,
        routerName: 'example2'}]
  },
  person
}

const role1 = {
  // Hide,
  main,
  FM,
  SM,
  FC,
  S: {
    name: 'powerManage',
    data: [
      { id: 13,
        routerName: 'role'},
      { id: 14,
        routerName: 'user'}]
  },
  person
}

const role2 = {
  // Hide,
  main,
  FM,
  SM,
  FC,
  S: {
    name: 'powerManage',
    data: [
      { id: 11,
        routerName: 'api'},
      { id: 12,
        routerName: 'auth'},
      { id: 13,
        routerName: 'role'},
      { id: 14,
        routerName: 'user'}]
  },
  person
}

export const allRole = {role0, role1, role2}
