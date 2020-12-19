import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import auth, { authSaga } from './auth';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
