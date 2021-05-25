import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PageHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/PageLogin')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/PageRegister')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
