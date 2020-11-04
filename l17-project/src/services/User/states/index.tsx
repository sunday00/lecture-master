import { createReducer, createSetValueAction, setValueReducer } from '../../../common/redux-helper';

type ActionsType = {
    setValue: Function,
    fetchUser: (name: string) => object
}

export const Types = {
    SetValue: 'user/SetValue',
    FetchUser: 'user/FetchUser'
}

export const actions:ActionsType = {
    setValue: createSetValueAction(Types.SetValue),
    fetchUser: name => ({
        type: Types.FetchUser, 
        name
    })
}

const INITIAL_STATE = {
    user: undefined
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.SetValue] : setValueReducer
});

export default reducer;
