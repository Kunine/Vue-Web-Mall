// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store/index'
import 'iview/dist/styles/iview.css'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal);

Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
