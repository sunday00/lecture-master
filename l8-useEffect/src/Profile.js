import React, { useEffect, useState } from 'react';

export default function Profile ({userId, canIRender}) {
    const [user, setUser] = useState(null);

    const someFunc = () => { console.log("a"); }
    function someFunc2 () { console.log("b"); }

    useEffect(() => {
        console.log( userId, canIRender );
        someFunc();
        someFunc2();
        setUser( getUsers(userId) );
    }, [userId, canIRender]);

    return (<>
        {!user && <p>waiting...</p>}
        {user && (
            <p>
                {user.id} : {user.name}
            </p>
        )}
    </>);
}

// below is actually backend api

const user1 = { id: 'batman', name: 'Bruce' }
const user2 = { id: 'joker', name: 'Arthur' }

function getUsers (userId) {
    return userId % 2 === 1 ? user1 : user2;
}