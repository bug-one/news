import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login'
import Register from '../views/Register.vue'
import User from '../views/profile/User.vue'
import UserEdit from '../views/profile/UserEdit.vue'
import MyFocus from '../views/profile/MyFocus.vue'
import Star from '../views/profile/Star.vue'
import PostDetail from '../views/PostDetail.vue'
import MoreComment from '../views/MoreComment.vue'
import Search from '../views/Search.vue'
import Comment from '../views/profile/Comment.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/index', component: Index },
  { path: '/', redirect: '/index' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/user', component: User, meta: { needAuth: true }
  },
  { path: '/userEdit', component: UserEdit, meta: { needAuth: true } },
  { path: '/myFocus', component: MyFocus, meta: { needAuth: true } },
  { path: '/star', component: Star },
  { path: '/postDetail/:id', component: PostDetail },
  { path: '/moreComment/:id', component: MoreComment },
  { path: '/search', component: Search },
  { path: '/myComment', component: Comment, meta: { needAuth: true } }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.needAuth == true && localStorage.getItem('token') == null) {
    router.push('login').catch(err => { });
  }
  next();
})

export default router

