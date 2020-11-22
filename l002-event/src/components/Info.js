import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        age: 0,
    });

    function onChange(e) {
        dispatch({
            type: 'changeValue',
            name: e.target.name,
            value: e.target.value,
        });
    }

    return (
        <div>
            <h2>Info</h2>
            <p>
                {state.name}, {state.age}
            </p>
            <input
                type="text"
                name="name"
                value={state.name}
                onChange={onChange}
            />
            <input
                type="number"
                name="age"
                value={state.age}
                onChange={onChange}
            />
        </div>
    );
};

export default Info;
