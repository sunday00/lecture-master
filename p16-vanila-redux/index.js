import { configureStore } from '@reduxjs/toolkit'

const checkToggle = document.querySelector('.toggle' )
const counter = document.querySelector('h2' )
const btnIncrease = document.querySelector('#increase' )
const btnDecrease = document.querySelector( '#decrease' )

const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

const toggle_switch = () => ({ type: TOGGLE_SWITCH })
const increase = difference => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE })

const initialState = {
  toggle: false,
  counter: 0,
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      }
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state;
  }
}

const store = configureStore({ reducer })

const render = () => {
  const state = store.getState()

  if(state.toggle) {
    checkToggle.classList.add('active')
  } else {
    checkToggle.classList.remove('active')
  }

  counter.innerText = state.counter
}

render()

store.subscribe(render)

checkToggle.addEventListener('change', (e) => {
  store.dispatch(toggle_switch())
})

btnIncrease.addEventListener('click', (e) => {
  store.dispatch(increase(1))
})

btnDecrease.addEventListener('click', (e) => {
  store.dispatch(decrease())
})
