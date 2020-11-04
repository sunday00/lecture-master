import produce from 'immer';

type ActionType = {
    [key: string] : string,
}

type StateType = {
    [key: string] : string|Array<any>|undefined,
}

type HandlerMapType = {
    [key: string] : Function,
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
    return (key:string, value:any) => ({type, key, value});
}

export function setValueReducer(state: StateType, action:ActionType): void
{
    state[action.key] = action.value;
}
