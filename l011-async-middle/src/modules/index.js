import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter from './counter';
import sample from './sample';
import loggerMiddleware from '../lib/loggerMiddleware';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({ counter, sample });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, ReduxThunk)),
);

export default store;
