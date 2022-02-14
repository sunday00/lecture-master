import { fetchNews } from '@a/index';
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
  },
  getters: {
  },
  modules: {
  },
});
