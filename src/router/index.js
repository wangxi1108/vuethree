import Router from 'vue-router'
import Vue from 'vue'
import config from './config'
Vue.use(Router)
let router = new Router({
  mode: 'hash',
  routes: config
})
export default router