import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  { path: '/index', component: index },
  { path: '/', redirect: '/index' },
  { path: '/login', component: login }
]

const router = new VueRouter({
  routes
})

export default router
