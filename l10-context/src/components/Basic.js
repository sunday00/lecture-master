import React, { useState } from 'react'

export default function Basic(props)
{
    return (
        <>
            <div>
                <Child1 name={props.name}></Child1>
            </div>
        </>
    );
}

function Child1(props)
{
    
    return (
        <>
            Why so serious, <h1>{props.name}</h1>? <br />
        </>
    );
}
