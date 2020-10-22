import React, { useCallback, useState } from 'react'

export default function Hook2(props)
{
    const [v, setV] = useState(0);
    const [fixed, setFixed] = useState(true);

    console.log(typeof setFixed);

    const onSomething = useCallback(() => someMethod(fixed), [fixed]);

    return (
        <>
            <div>
                <h1>{v}</h1>
                {/* <UserFunction onSomething={() => someMethod(fixed)} /> */}
                <UserFunction onSomething={onSomething} />
                <button onClick={ () => setV(v + 1) }>call</button>
            </div>
        </>
    );
}

const UserFunction = React.memo(function(props){
    console.log('render', props);
    return null;
});

const someMethod = function(fixed){
    console.log(fixed);
}