import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import {destinations} from '@/data.json'

const routes = [
  {path: '/', name:'Home', component: Home},
  {path: '/about', name:'About', component: () => import('@/views/About.vue')},

  {
    path:'/protected',
    name: 'protected',
    component: () => import('@/views/Protected.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import('@/views/Invoices.vue'),
    meta: {
      requiresAuth: true
    },
  },
  
  {
    path:'/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },

  {
    path: '/destination/:id/:slug', 
    name:'destination.show', 
    component: () => import('@/views/DestinationShow.vue'),
    // props: true,
    props: route => ({ ...routes.params, id: parseInt(route.params.id) }),
    beforeEnter: (to, from) => {
      const exists = destinations.find(d => d.id === parseInt(to.params.id))
      if( !exists ) return {
        name: 'notFound',
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash,
      }
    },
    children:[
      {
        path: ':experienceSlug', 
        name:'experience.show', 
        component: () => import('@/views/ExperienceShow.vue'),
        // props: true,
        props: route => ({ ...routes.params, id: parseInt(route.params.id), experienceSlug: route.params.experienceSlug })
      }
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/errors/E404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'router-link-active vue-school-active-link active',

  routes,

  scrollBehavior (to, from, savedPosition){
    // return savedPosition || {top: 0}
    return savedPosition || new Promise(resolve => {
      setTimeout(() => resolve({top:0, behavior: 'smooth'}), 300)
    }) 
  },
})

router.beforeEach((to, from) => {
  if( to.meta.requiresAuth && !window.user){
    return {name: 'login', query: {redirect: to.fullPath}}
  }
})

export default router