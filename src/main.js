import Vue from 'vue'
import router from './router'    // 扫描同级目录的路由router
//element ui所需
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';      //导入同级目录的App.vue

/**
 * 1.views导入代码
 * 2.在router中配置路由
 * 3.在main.js配置试图App.vue
 */


Vue.use(router);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
