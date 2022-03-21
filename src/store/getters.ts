import { State } from '../types/state.d';

export default {
  list(state: State) {
    return state.list;
  },
  user(state: State) {
    return state.user;
  },
  item(state: State) {
    return state.item;
  },
};
