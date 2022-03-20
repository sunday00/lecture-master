import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
    list: [],
    user: {},
    item: {},
  },
  mutations,
  actions,
  getters,
  modules: {
  },
});
