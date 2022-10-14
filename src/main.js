/*
 * @Description: 
 * @Author: 莲白
 * @Date: 2022-10-14 19:07:19
 * @LastEditTime: 2022-10-14 19:54:15
 * @LastEditors: 莲白
 */
import Vue from 'vue'
import HomeView from './views/HomeView.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入echarts ui图
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(HomeView)
}).$mount('#app')
