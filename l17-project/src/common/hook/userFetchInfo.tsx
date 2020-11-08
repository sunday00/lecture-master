import { getFetchKey } from '../util/fetches';
import { useSelector, shallowEqual } from 'react-redux';
import { FetchStatus } from '../constant';
import { FETCH_KEY } from '../redux-helper';
import { StateType } from '../type';

export default function useFetchInfo(actionType: string, fetchKey=null) {
  const _fetchKey = getFetchKey({
    type: actionType,
    [FETCH_KEY]: fetchKey,
  });
  return useSelector(
    (state: StateType) => ({
      fetchStatus:
        state.common.fetchInfo.fetchStatusMap[actionType]?.[_fetchKey],
      isFetching:
        state.common.fetchInfo.fetchStatusMap[actionType]?.[_fetchKey] ===
        FetchStatus.Request,
      isFetched:
        state.common.fetchInfo.fetchStatusMap[actionType]?.[_fetchKey] ===
          FetchStatus.Success ||
        state.common.fetchInfo.fetchStatusMap[actionType]?.[_fetchKey] ===
          FetchStatus.Fail,
      isSlow: !!state.common.fetchInfo.isSlowMap[actionType]?.[_fetchKey],
      nextPage:
        state.common.fetchInfo.nextPageMap[actionType]?.[_fetchKey] || 0,
      totalCount:
        state.common.fetchInfo.totalCountMap[actionType]?.[_fetchKey] || 0,
      errorMessage:
        state.common.fetchInfo.errorMessageMap[actionType]?.[_fetchKey],
    }),
    shallowEqual,
  );
}