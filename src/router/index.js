import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/modules/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"),
    meta: { public: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login"),
    meta: { public: true }
  },
  ,
  {
    path: '/create',
    name: 'Create',
    component: () => import("../views/CreateUser"),
    meta: { public: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// if(localStorage.token)
//     store.token = localStorage.token
router.beforeEach((routeTo, routeFrom, next) => {
  if(!routeTo.meta.public && !store.state.token) return next({ path:'/login' })
  next()
});

export default router
