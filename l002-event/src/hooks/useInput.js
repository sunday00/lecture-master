import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

export function useInput(init) {
    const [state, dispatch] = useReducer(reducer, init);
    function onChange(e) {
        dispatch({
            type: 'changeValue',
            name: e.target.name,
            value: e.target.value,
        });
    }
    return [state, onChange];
}
