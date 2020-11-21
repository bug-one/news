import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios';
axios.defaults.baseURL = 'http://157.122.54.189:9083';
Vue.prototype.$axios = axios;


Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
