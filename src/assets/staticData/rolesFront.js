/*
  前端权限思路：
  1.前端自己写出权限映射,后端传来权限等级即可
*/
// 隐藏路由
const Hide = {
  id: 0,
  hidden: true,
  data: [
    { id: 11,
      name: '首页',
      routerName: 'main'},
    { id: 21,
      name: '个人中心',
      routerName: 'person'},
    { id: 22,
      name: 'example2',
      routerName: 'example2'}
  ]
}

// 管理员的样例中心
const FM = {
  name: '优化中心',
  id: 1,
  icon: 'iconfont icon-daibanshixiang',
  data: [
    { id: 11,
      name: '优化样例一',
      routerName: 'exampleManage1'}]
}

const SM = {
  name: '样例中心',
  id: 2,
  icon: 'iconfont icon-daibanshixiang',
  data: [
    { id: 11,
      name: '表格样例',
      routerName: 'table'},
    { id: 12,
      name: '图表样例',
      routerName: 'echarts'}]
}

// 抽离直接使用
const role0 = {
  Hide,
  F: {
    name: '样例中心',
    id: 1,
    icon: 'iconfont icon-daibanshixiang',
    data: [
      { id: 11,
        name: '修改密码',
        routerName: 'example1'},
      { id: 12,
        name: '查看信息',
        routerName: 'example2'}]
  }
}

const role1 = {
  Hide,
  FM,
  SM,
  S: {
    name: '权限管理',
    id: 3,
    icon: 'iconfont icon-renjijiaohu',
    data: [
      { id: 13,
        name: '角色管理',
        routerName: 'role'},
      { id: 14,
        name: '用户管理',
        routerName: 'user'}]
  }
}

const role2 = {
  Hide,
  FM,
  SM,
  S: {
    name: '权限管理',
    id: 3,
    icon: 'iconfont icon-renjijiaohu',
    data: [
      { id: 11,
        name: 'api管理',
        routerName: 'api'},
      { id: 12,
        name: '权限管理',
        routerName: 'auth'},
      { id: 13,
        name: '角色管理',
        routerName: 'role'},
      { id: 14,
        name: '用户管理',
        routerName: 'user'}]
  }
}

export const allRole = {role0, role1, role2}
