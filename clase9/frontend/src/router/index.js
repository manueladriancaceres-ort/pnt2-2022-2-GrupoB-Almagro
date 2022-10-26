import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Sistema from '../views/Sistema.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sistema',
      name: 'sistema',
      component: Sistema,
      meta: { RequireAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach( (to, from, next) => {
  const usuarioLog = localStorage.getItem('usuario')
  if(to.matched.some(r => r.meta.RequireAuth ) && !usuarioLog) {
    next('/')
  }
  next()
})

export default router
