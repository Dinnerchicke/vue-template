/*
  前端权限思路：
  1.前端自己写出权限映射,后端传来权限等级即可
*/
const role0 = {
  Hide: {
    id: 0,
    hidden: true,
    data: [
      { id: 11,
        name: '首页',
        routerName: 'main'},
      { id: 21,
        name: '个人中心',
        routerName: 'person'}
    ]
  },
  F: {
    name: '学籍管理',
    id: 1,
    icon: 'el-icon-s-custom',
    data: [
      { id: 11,
        name: '修改密码',
        routerName: 'changePassword'},
      { id: 12,
        name: '查看信息',
        routerName: 'getInformation'}]
  }
}

const role1 = {
  Hide: {
    id: 0,
    hidden: true,
    data: [
      { id: 11,
        name: '首页',
        routerName: 'main'},
      { id: 21,
        name: '个人中心',
        routerName: 'person'}
    ]
  },
  F: {
    name: '学籍管理',
    id: 1,
    icon: 'el-icon-s-custom',
    data: [
      { id: 11,
        name: '添加学生信息',
        routerName: 'insertInformation'},
      { id: 12,
        name: '删除学生信息',
        routerName: 'delInformation'}]
  },
  S: {
    name: '权限管理',
    id: 2,
    icon: 'el-icon-s-check',
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
  Hide: {
    id: 0,
    hidden: true,
    data: [
      { id: 11,
        name: '首页',
        routerName: 'main'},
      { id: 21,
        name: '个人中心',
        routerName: 'person'}
    ]
  },
  F: {
    name: '学籍管理',
    id: 1,
    icon: 'el-icon-s-custom',
    data: [
      { id: 11,
        name: '修改密码',
        routerName: 'changePassword'},
      { id: 12,
        name: '查看信息',
        routerName: 'getInformation'}]
  },
  S: {
    name: '权限管理',
    id: 2,
    icon: 'el-icon-s-check',
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
