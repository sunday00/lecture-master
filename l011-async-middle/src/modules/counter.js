import { createAction, handleActions } from 'redux-actions';
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE.ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increase_async = createAction(INCREASE_ASYNC, () => undefined);
export const decrease_async = createAction(DECREASE_ASYNC, () => undefined);

// export const increase_async = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };
// export const decrease_async = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };
function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
  console.log(yield select((state) => state.counter));
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState,
);

export default counter;
