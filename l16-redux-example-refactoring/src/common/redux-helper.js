import produce from 'immer'

export function createReducer (initState, handlerMap) {
    return function (state = initState, action) {
        return produce(state, draft => {
            const handler = handlerMap[action.type];
            if( handler ){
                handler(draft, action);
            }
        });
    }
}

export function createSetValueAction (type) {
    return (k, v) => ({type, k, v});
}

export function setValueReducer (state, action) {
    state[action.k] = action.v;
}