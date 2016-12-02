import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

/* eslint-disable no-new */
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:App
  }
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
