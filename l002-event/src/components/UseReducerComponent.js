import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'number/INCREMENT':
            return { value: state.value + 1 };
        case 'number/DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <h1>USE REDUCER</h1>
            <p>{state.value}</p>
            <button
                onClick={(e) => {
                    dispatch({ type: 'number/INCREMENT' });
                }}
            >
                +
            </button>
            <button
                onClick={(e) => {
                    dispatch({ type: 'number/DECREMENT' });
                }}
            >
                -
            </button>
        </div>
    );
};

export default UseReducerComponent;
