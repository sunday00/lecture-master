import { State } from '@/types/state.d';
import { User } from '@/types/user.d';
import { Item } from '@/types/item.d';

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
  SET_LIST(state: State, data: []) {
    state.list = data;
  },
  SET_USER(state: State, data: User) {
    state.user = data;
  },
  SET_ITEM(state: State, data: Item) {
    state.item = data;
  },
};
