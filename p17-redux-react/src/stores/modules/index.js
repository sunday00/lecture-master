import { combineReducers } from 'redux'
import counter from '@s/modules/counter.js';

const rootReducer = combineReducers({
  counter,
})

export default rootReducer
