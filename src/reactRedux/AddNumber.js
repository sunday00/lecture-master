import React, { useState } from 'react';
// import {store} from './ReduxedStore';

export default function AddNumber (props)
{
    const [incrementSize, setIncrementSize] = useState(0);

    const onChange = (e) => {
        const v = e.currentTarget.value === '' ? '' : Number.parseInt(e.currentTarget.value);
        setIncrementSize(v);
    }

    const onClick = (e) => {
        props.onPlus(incrementSize);
        // store.dispatch({type:'INCREMENT_SIZE', incrementSize: incrementSize});
    }

    return (
        <section className="section">
            <h3>Add number</h3>
            <input type="text" value={incrementSize} name="number" onChange={onChange} />
            <button name="plus" onClick={onClick}>+</button>
        </section>
    );
}
