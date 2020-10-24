import React from 'react'
import { useState } from 'react';

export default function Practice3(props)
{
    const [list, setList] = useState([]);
    const [lastN, setLastN] = useState(0);

    function ccc (e) {
        const current = lastN + 1;
        setList( [...list, {l: current, p: 'k' }] );
        setLastN(current);
    }

    return (
        <>
            <div>
                {list.map(l => (
                    <div key={l.l}>
                        <p>{l.l}</p>
                        <p>{l.p}</p>
                    </div>
                ))}
                <button onClick={ccc}>add some object</button>
            </div>
        </>
    );
}
