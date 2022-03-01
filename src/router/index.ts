import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import News from '@/views/NewsView.vue';
import Asks from '@/views/AsksView.vue';
import Jobs from '@/views/JobsView.vue';
import User from '@/views/UserView.vue';
import Item from '@/views/ItemView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/asks',
    name: 'asks',
    component: Asks,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
  },
  {
    path: '/item/:id',
    name: 'item',
    component: Item,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
