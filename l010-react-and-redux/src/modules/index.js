import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({ counter, todos });

export const store = createStore(
  rootReducer,
  // window,
  // __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS.__EXTENSION__(),
  composeWithDevTools(),
);

export default rootReducer;
