import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {path: '/', name:'Home', component: Home},
  {path: '/about', name:'About', component: () => import('@/views/About.vue')},

  {
    path: '/destination/:id/:slug', 
    name:'destination.show', 
    component: () => import('@/views/DestinationShow.vue'),
    // props: true,
    props: route => ({ id: parseInt(route.params.id) })
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'router-link-active vue-school-active-link active',

  routes
})

export default router