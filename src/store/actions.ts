import {
  fetchList, fetchUser, fetchItem,
} from '@a/index';
import { ActionContext } from 'vuex';
import { State } from '@/types/state.d';

export default {
  FETCH_LIST(ctx: ActionContext<State, State>, viewName: string) {
    fetchList(viewName, 1).then((res) => {
      ctx.commit('SET_LIST', res.data);
      return res;
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },

  FETCH_USER(ctx: ActionContext<State, State>, name: string) {
    fetchUser(name).then((res) => {
      ctx.commit('SET_USER', res.data);
      return res;
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
  FETCH_ITEM(ctx: ActionContext<State, State>, id: number) {
    fetchItem(id).then((res) => {
      ctx.dispatch('FETCH_USER', res.data.user);
      ctx.commit('SET_ITEM', res.data);
      return res;
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
};
