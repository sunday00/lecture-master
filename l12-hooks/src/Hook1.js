import { random } from 'lodash';
import React, { useMemo, useState } from 'react'

export default function Hook1(props)
{
    console.log('rend?');
    
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);

    const V = useMemo(() => exec1(v1), [v1]);

    return (
        <>
            <div>
                <p>{ V }</p>
                <p>{v1}</p>
                <p>{v2}</p>
                <button onClick={ () => setV1(v1 + 1) }>1</button>
                <button onClick={ () => setV2(v2 + 1) }>2</button>

            </div>
        </>
    );
}

function exec1(v1) {
    return v1 + random(10000);
}
