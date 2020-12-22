import { createAction, handleActions } from 'redux-actions';
// import { produce } from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import * as LocalStorage from '../lib/auth/LocalStorage';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  LocalStorage.del('user');
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

const user = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);

export default user;
