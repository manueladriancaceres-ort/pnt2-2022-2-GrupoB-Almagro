import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SystemView from '../views/SystemView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shoppingcart',  // path: '/shoppingcart/:id'
      name: 'shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/:pathMatch(.*)*',   //De esta forma se identifica como un error (página no encontrada)
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/system',
      name: 'system',
      component: SystemView
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

export default router
