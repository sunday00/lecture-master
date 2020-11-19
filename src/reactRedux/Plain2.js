import React from 'react'

export default function Plain2(props)
{
    
    return (
        <section className="section">
            <h2>Display number root</h2>
            <DisplayNumber number={props.number}></DisplayNumber>
        </section>
    );
}

function DisplayNumber (props)
{
    
    return (
        <section className="section">
            <h3>Display number</h3>
            <input type="text" name="display" readOnly value={props.number} />
        </section>
    );
}

