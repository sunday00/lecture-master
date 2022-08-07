import { combineReducers } from 'redux'
import counter from '@s/modules/counter.js'
import todos from './todos.js'

const rootReducer = combineReducers({
  counter,
  todos,
})

export default rootReducer
