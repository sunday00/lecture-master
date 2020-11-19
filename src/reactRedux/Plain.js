import React, { useState } from 'react'

export default function Plain(props)
{
    
    return (
        <section className="section">
            <h2>Add number root</h2>
            <AddNumber onPlus={props.onPlus}></AddNumber>
        </section>
    );
}

function AddNumber (props)
{
    const [incrementSize, setIncrementSize] = useState(0);

    const onChange = (e) => {
        const v = e.currentTarget.value === '' ? '' : Number.parseInt(e.currentTarget.value);
        setIncrementSize(v);
    }

    const onClick = (e) => {
        props.onPlus(incrementSize);
    }

    return (
        <section className="section">
            <h3>Add number</h3>
            <input type="text" value={incrementSize} name="number" onChange={onChange} />
            <button name="plus" onClick={onClick}>+</button>
        </section>
    );
}

