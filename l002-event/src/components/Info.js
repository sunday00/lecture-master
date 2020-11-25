import React from 'react';
import { useInput } from '../hooks/useInput';

const Info = () => {
    const [state, onChange] = useInput({
        name: '',
        age: 0,
    });

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
