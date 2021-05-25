import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/modules/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    alias: '/',
    component: () => import("../views/Home.vue"),
    meta: { public: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login"),
    meta: { public: true }
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import("../views/CreateUser"),
    meta: { public: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import("../views/Profile"),
    meta: { public: false }
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import("../views/Select"),
    meta: { public: false }
  },
  {
    path: '/characters',
    name: 'Character',
    component: () => import("../views/Characters"),
    meta: { public: false }
  },
  {
    path: '/comics',
    name: 'Comics',
    component: () => import("../views/Comics"),
    meta: { public: false }
  },
  {
    path: '/char/:id',
    name: 'Char',
    component: () => import("../views/Char"),
    meta: { public: false }
  },
  {
    path: '/comic/:id',
    name: 'Comic',
    component: () => import("../views/Comic"),
    meta: { public: false }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((routeTo, routeFrom, next) => {
  if(!routeTo.meta.public && !store.state.token) return next({ path:'/login' })
  next()
});

export default router
