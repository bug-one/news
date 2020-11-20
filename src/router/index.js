import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import UserEdit from '../views/UserEdit.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/index', component: Index },
  { path: '/', redirect: '/index' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/user', component: User },
  { path: '/userEdit', component: UserEdit }
]

const router = new VueRouter({
  routes
})

export default router
