// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/layout'
// import router from './router'
import VueRouter from 'vue-router'

import HomeIndex from './components/index'
import DetailPage from './components/page/detail'
import DetailAnaPage from './components/page/detail/analysis'
import DetailCount from './components/page/detail/count'

import './assets/css/index.css'
import './assets/css/common.css'
// 引入mock.js
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
const routes = [
  {
    'path': '/',
    component: HomeIndex
  },
  {
    'path': '/detail',
    component: DetailPage,
    redirect: '/detail/analysis',
    children: [
      {
        'path': 'analysis',
        component: DetailAnaPage
      },
      {
        'path': 'count',
        component: DetailCount
      }
    ]
  }
]

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
