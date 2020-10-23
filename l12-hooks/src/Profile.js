import React, { forwardRef, useState, useImperativeHandle  } from 'react'
import { useDebugValue } from 'react';

function Profile(props, ref)
{
    const [n, setN] = useState(0);
    const [state, ch] = useEcho('kakao');

    useImperativeHandle(ref, () => ({
        addN : v => setN(n + v)
    }));

    return (
        <>
            <h1>{n}</h1>
            <h2>{state}</h2>
            <button onClick={ch}>bbb</button>
        </>
    );
}

export default forwardRef(Profile);

function useEcho(v){
    const [msg, setMsg] = useState(v);

    const ch = () =>  setMsg('insta'); 

    useDebugValue('social');

    return [msg, ch];
}