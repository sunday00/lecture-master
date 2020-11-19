import { createStore } from 'redux';

function reducer(state, action){
    if( state === undefined ){
        return 'read';
    }
    return action.mode;
}

export const store = createStore(reducer);