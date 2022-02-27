import { State } from '@/types/state.d';

export default {
  SET_NEWS(state: State, data: []) {
    state.news = data;
  },
  SET_JOBS(state: State, data: []) {
    state.jobs = data;
  },
  SET_ASKS(state: State, data: []) {
    state.asks = data;
  },
};
