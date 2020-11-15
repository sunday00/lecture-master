import { createStore } from 'redux';

function reducer(state, action){
    if( state === undefined ){
        return {
            currentId: 0
        }
    } else {
        return {
            currentId: action.currentId
        }
    }
}
export const store = createStore(reducer);
