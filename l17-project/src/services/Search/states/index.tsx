import { createReducer, createSetValueAction, setValueReducer } from '../../../common/redux-helper';

type ActionsType = {
    setValue: Function,
    fetchAutoComplete: (keyword: string) => object
}

export const Types = {
    SetValue: 'search/SetValue',
    FetchAutoComplete: 'search/FetchAutoComplete'
}

export const actions:ActionsType = {
    setValue: createSetValueAction(Types.SetValue),
    fetchAutoComplete: keyword => ({
        type: Types.FetchAutoComplete,
        keyword
    }),
}

const INITIAL_STATE = {
    keyword: '',
    autoCompletes: []
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.SetValue] : setValueReducer
});

export default reducer;
