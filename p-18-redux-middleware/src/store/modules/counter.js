import {handleActions, createAction} from 'redux-actions';

const defaultState = 0;

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

const counter = handleActions({
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1,
}, defaultState)

export default counter

