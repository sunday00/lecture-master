import { combineReducers, createStore, applyMiddleware } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter, { counterSaga } from './counter';
import sample from './sample';
import loading from './loading';
import loggerMiddleware from '../lib/loggerMiddleware';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({ counter, sample, loading });
const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([counterSaga()]);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(loggerMiddleware, ReduxThunk, sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
