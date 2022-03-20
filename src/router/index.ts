import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import News from '@v/NewsView.vue';
// import Asks from '@v/AsksView.vue';
// import Jobs from '@v/JobsView.vue';
import User from '@v/UserView.vue';
import Item from '@v/ItemView.vue';
import createListView from '@v/CreateListView';

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
    // component: createListView('news'),
  },
  {
    path: '/asks',
    name: 'ask',
    // component: Asks,
    component: createListView('asks'),
  },
  {
    path: '/ask/item/:id',
    name: 'item',
    component: Item,
  },
  {
    path: '/jobs',
    name: 'jobs',
    // component: Jobs,
    component: createListView('jobs'),
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
