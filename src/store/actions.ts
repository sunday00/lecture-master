import {
  fetchJobs, fetchNews, fetchAsks, fetchUser, fetchItem,
} from '@a/index';
import { ActionContext } from 'vuex';
import { State } from '@/types/state.d';

export default {
  FETCH_NEWS(ctx: ActionContext<State, State>) {
    fetchNews(1).then((res) => {
      ctx.commit('SET_NEWS', res.data);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
  FETCH_JOBS(ctx: ActionContext<State, State>) {
    fetchJobs(1).then((res) => {
      ctx.commit('SET_JOBS', res.data);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
  FETCH_ASKS(ctx: ActionContext<State, State>) {
    fetchAsks(1).then((res) => {
      ctx.commit('SET_ASKS', res.data);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
  FETCH_USER(ctx: ActionContext<State, State>, name: string) {
    fetchUser(name).then((res) => {
      ctx.commit('SET_USER', res.data);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
  FETCH_ITEM(ctx: ActionContext<State, State>, id: number) {
    fetchItem(id).then((res) => {
      ctx.commit('SET_ITEM', res.data);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  },
};
