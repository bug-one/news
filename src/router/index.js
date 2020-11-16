import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'

Vue.use(VueRouter)

const routes = [
  { path: '/index', component: index },
  { path: '/', redirect: '/index' },
]

const router = new VueRouter({
  routes
})

export default router
