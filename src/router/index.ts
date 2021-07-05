import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'

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
    component: () => import('@/pages/Contact.vue')
  },
  {
    name: 'About Me',
    path: '/me',
    alias: '/about',
    component: () => import('@/pages/About.vue')
  },
  // {
  //   name: 'Projects',
  //   path: '/projects',
  //   alias: '/works',
  //   component: () => import('@/pages/Projects.vue')
  // },
  {
    name: 'Project Details',
    path: '/projects/:projectId?',
    alias: '/works/:projectId?',
    props: true,
    component: () => import('@/pages/Projects.vue')
  }
]

const router = createRouter({
  scrollBehavior: (to, from, savedPosition) => {
    return {
      top: 0
    }
  },
  history: createWebHistory(),
  routes
})

export default router
