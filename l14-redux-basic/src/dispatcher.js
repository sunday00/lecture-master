import { createStore, applyMiddleware } from 'redux';

const ADD_USER = 'somePackage/addUser';
export function addUser ({p1, p2}){
    return { type: ADD_USER, someP1: p1, someP2: p2 }
}

const middleWare1 = store => next => action => {
    // some logic
    const result = next(action);
    // some logic

    return result;
}

const reducer = (state, action) => {
    // some logic 
    return state;
}

export const store = createStore(reducer, applyMiddleware(middleWare1));
store.dispatch();

