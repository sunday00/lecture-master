import React, { useState, useRef, useEffect } from 'react'

export default function Ref5(props)
{
    const [v, setV] = useState(1);
    const prevVRef = useRef([0]);
    console.log('mounted');

    useEffect(() => {
        const prevs = prevVRef.current;
        prevs.push(v);
        prevVRef.current = prevs;
    }, [v]);

    const prevV = prevVRef.current;

    return (
        <>
            {prevV.map((vv) => (
                <p key={vv}>{vv}</p>
            ))}
            <div>
                <button onClick={() => {setV(v + 1)}}>Change</button>
            </div>
        </>
    );
}
