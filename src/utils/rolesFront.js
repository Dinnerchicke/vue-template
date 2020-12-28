/*
  前端权限思路：
  1.前端自己写出权限映射,后端传来权限等级即可
*/

export const stuAdmin = {
  account: 'SAdmin',
  password: 'SAdmin',
  role: 0
}

export const teaAdmin = {
  account: 'TAdmin',
  password: 'TAdmin',
  role: 1
}

export const studentRouterMapping = {
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
        routerName: 'getInformation'},
      { id: 13,
        name: '修改学籍',
        routerName: 'changeLicence'}]
  },
  S: {
    name: '选课管理',
    id: 2,
    icon: 'el-icon-s-claim',
    data: [
      { id: 21,
        name: '查看选课',
        routerName: 'changePassword'},
      { id: 22,
        name: '选修课程',
        routerName: 'changePassword'},
      { id: 23,
        name: '修改选课',
        routerName: 'changePassword'}]
  },
  T: {
    name: '成绩管理',
    id: 3,
    icon: 'el-icon-s-marketing',
    data: [
      { id: 31,
        name: '查询成绩',
        routerName: 'changePassword'}]
  }
}

export const teacherRouterMapping = {
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
        routerName: 'delInformation'},
      { id: 13,
        name: '修改学生信息',
        routerName: 'changeInformation'}]
  },
  S: {
    name: '选课管理',
    id: 2,
    icon: 'el-icon-s-claim',
    data: [
      { id: 21,
        name: '添加课程',
        routerName: 'changePassword'},
      { id: 22,
        name: '删除课程',
        routerName: 'changePassword'},
      { id: 23,
        name: '修改课程',
        routerName: 'changePassword'},
      { id: 24,
        name: '查看选课详情',
        routerName: 'changePassword'}]
  },
  T: {
    name: '成绩管理',
    id: 3,
    icon: 'el-icon-s-marketing',
    data: [
      { id: 31,
        name: '查询成绩',
        routerName: 'changePassword'},
      { id: 32,
        name: '删除成绩',
        routerName: 'changePassword'},
      { id: 33,
        name: '查看成绩',
        routerName: 'changePassword'},
      { id: 34,
        name: '修改学生成绩',
        routerName: 'changePassword'}]
  }
}
