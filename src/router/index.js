import Vue from 'vue'   //导入vue
import Router from 'vue-router'  //导入路由

import Main from '../views/Main'   //导入模板
import Login from '../views/Login'
import Try from '../views/Try'

Vue.use(Router);  //使用路由

export default new Router({   //配置路由
  routes:[
    {
      path: '/main',       //定义路径
      component: Main      //模板名
    },{
       path: '/login',
       component: Login
    },{
      path:'/try',
      component:Try
    }
  ]
});
