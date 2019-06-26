import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(vuex)
Vue.config.productionTip = false

const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

window.$vm = vm
