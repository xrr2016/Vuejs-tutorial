import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'

import store  from './store'
import App from './App'

import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'
import NotFound from './components/404'



/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/time-entries',
    component: TimeEntries,
    chidren:[
      path:'log-time',
      component:LogTime
    ]
  },
  {
    path:'*',
    component: NotFound
  }
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  ...App,
})
