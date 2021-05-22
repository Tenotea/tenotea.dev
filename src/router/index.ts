import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'

const routes:RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Contact',
    path: '/contact',
    alias: '/get-in-touch',
    component: () => import('../pages/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
