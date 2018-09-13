// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/layout'
// import router from './router'
import VueRouter from 'vue-router'

import PageIndex from './pages/index'

import './assets/css/index.css'
import './assets/css/common.css'
require('./mock/mock.js')
// import mock from 'mockjs'
// import mockdata from './mock/mock.js'

Vue.config.productionTip = false
require.config({
  paths: {
    mock: 'mock/mock.js'
  }
})

Vue.use(VueRouter)
const routes = [{
  'path': '/',
  component: PageIndex
}]

let router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
