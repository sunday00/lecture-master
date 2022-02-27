import { State } from '../types/state.d';

export default {
  news(state: State) {
    return state.news;
  },
  asks(state: State) {
    return state.asks;
  },
  jobs(state: State) {
    return state.jobs;
  },
};
