import { fetchJobs, fetchNews, fetchAsks } from '@a/index';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: {},
    asks: {},
    jobs: {},
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
    SET_JOBS(state, data) {
      state.jobs = data;
    },
    SET_ASKS(state, data) {
      state.asks = data;
    },
  },
  actions: {
    FETCH_NEWS(ctx) {
      fetchNews(1).then((res) => {
        ctx.commit('SET_NEWS', res.data);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    },
    FETCH_JOBS(ctx) {
      fetchJobs(1).then((res) => {
        ctx.commit('SET_JOBS', res.data);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    },
    FETCH_ASKS(ctx) {
      fetchAsks(1).then((res) => {
        ctx.commit('SET_ASKS', res.data);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    },
  },
  getters: {
    asks(state) {
      return state.asks;
    },
  },
  modules: {
  },
});
