import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CampStore from '../views/CampStore.vue'
import CampProdInfo from '../views/CampProdInfo.vue'
import CampCart from '../views/CampCart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/campstore',
    name: 'campstore',
    component: CampStore
  },
  {
    path: '/campprodinfo',
    name: 'campprodinfo',
    component: CampProdInfo
  },
  {
    path: '/campcart',
    name: 'campcart',
    component: CampCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
