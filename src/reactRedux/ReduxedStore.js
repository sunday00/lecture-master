import {createStore} from 'redux';

function reducer (state, action) {

    if( state && action.type === 'INCREMENT_SIZE' ){
        return {...state, number: state.number + action.incrementSize}
    }

    return {...state, number:0};
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());