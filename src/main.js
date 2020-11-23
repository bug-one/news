import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Vant, { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios';
axios.defaults.baseURL = 'http://157.122.54.189:9083';
axios.interceptors.request.use(config => {
  if (!config.headers.authorization && localStorage.getItem('token')) {
    config.headers.authorization = localStorage.getItem('token');
  }
  return config;
})
axios.interceptors.response.use(res => {
  const pattern = /^4\d{2}$/
  if (pattern.test(res.data.statusCode)) {
    Toast({
      message: res.data.message || '服务器错误',
      position: 'bottom'
    });
    console.log(res);
  }
  if (res.data.message == '用户信息验证失败') {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.replace("login");
  }
  return res;
})
Vue.prototype.$axios = axios;


Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
