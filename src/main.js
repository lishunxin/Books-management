// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueAxios from 'vue-axios'
import axios from 'axios'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios, axios, qs);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,Element,
  components: { App },
  template: '<App/>'
}
)
