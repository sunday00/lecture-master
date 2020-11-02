import produce from 'immer';

type ActionType = {
    [k: string] : string,
}

type StateType = {
    [k: string] : string|Array<any>,
}

type HandlerMapType = {
    [k: string] : Function,
}

export function createReducer(initialState: StateType, handlerMap:HandlerMapType)
{
    return function (state = initialState, action:ActionType){
        const handler = handlerMap[action.type];
        if (handler){
            return produce(state, draft => {
                const handler = handlerMap[action.type];
                handler(draft, action);
            });
        } else {
            return state;
        }
    }
}

export function createSetValueAction(type: string)
{
    return (k:string, v:any) => ({type, k, v});
}

export function setValueReducer(state: StateType, action:ActionType): void
{
    state[action.k] = action.v;
}
