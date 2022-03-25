import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import User from '@v/UserView.vue';
import Item from '@v/ItemView.vue';
import createListView from '@v/CreateListView';
import store from '@s/index';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    // component: News,
    component: createListView('news'),
    beforeEnter(to, from, next) {
      store.state.list = [];
      next();
    },
  },
  {
    path: '/asks',
    name: 'ask',
    // component: Asks,
    component: createListView('asks'),
    beforeEnter(to, from, next) {
      store.state.list = [];
      next();
    },
  },
  {
    path: '/ask/item/:id',
    name: 'item',
    component: Item,
    beforeEnter(to, from, next) {
      store.state.user = {};
      store.state.item = {};
      next();
    },
  },
  {
    path: '/jobs',
    name: 'jobs',
    // component: Jobs,
    component: createListView('jobs'),
    beforeEnter(to, from, next) {
      store.state.list = [];
      next();
    },
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    beforeEnter(to, from, next) {
      store.state.user = {};
      next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
