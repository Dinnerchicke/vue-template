### vue-template

此项目使用vue2.x,初步目标为建成vue模版用于快速开发

布局使用flex布局,暂定样式使用scss

UI使用ElementUI

删依赖时没权限极有可能是有进程在保护node_modules，退出vscode一般可以解决

### staticData
静态数据放在@/assets/staticData/里面
有echarts、表格模板相关数据、角色路由数据

### Eslint

如果是js部分的eslint报错，已经配置好，直接ctrl+S保存会自动纠错

注意:前端使用Eslint是必要的,规范代码风格

### 路径别名
'@': 'src',
'utils': 'src/utils',
'api': 'src/api',
'views': 'src/views',
'components': 'src/components',
'store': 'src/store',
'styles': 'src/styles'