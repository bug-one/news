import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Index'
import login from '../views/Login'

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
