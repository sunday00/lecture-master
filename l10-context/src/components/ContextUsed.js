import { values } from 'lodash';
import React, { useContext } from 'react'
import { createContext } from 'react';
import { useState } from 'react';

import { Context } from '../contexts/Context';

export default function ContextUsed(props)
{   
    return (
        <>
            <div>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </>
    );
}

function Child2(props)
{
    
    return (
        <Context.Consumer>
            { value => <>
                Why so serious, <h1>{value}</h1>? <br />
            </> }
        </Context.Consumer>
    );
}

function Child3(props)
{
    const value = useContext(Context)
    return (
        <>
            Why so serious, <h1>{value}</h1>?
        </>
    );
}

