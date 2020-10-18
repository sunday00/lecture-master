import React, { useEffect, useState } from 'react';
import useUser from './useUser';

export default function Profile ({userId, canIRender}) {

    // const someFunc = () => { console.log("a"); }
    // function someFunc2 () { console.log("b"); }

    const user = useUser({userId, canIRender});

    return (<>
        {!user && <p>waiting...</p>}
        {user && (
            <p>
                {user.id} : {user.name}
            </p>
        )}
    </>);
}
