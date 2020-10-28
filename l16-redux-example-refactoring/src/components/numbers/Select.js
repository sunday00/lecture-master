import React from 'react'

export default function Select(props)
{
    return (
        <div>
            <select onChange={ e => { props.onChange(e.currentTarget.value) } } value={props.value}>
                {props.options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
            {props.postfix}
        </div>
    );
}
