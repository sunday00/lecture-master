import { useEffect, useState } from 'react';

export default function Profile ({userId, canIRender}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // console.log( userId, canIRender );
        // someFunc();
        // someFunc2();
        setUser( getUsers(userId) );
    }, [canIRender]);

    return user;
}

// below is actually backend api

const user1 = { id: 'batman', name: 'Bruce' }
const user2 = { id: 'joker', name: 'Arthur' }

function getUsers (userId) {
    return userId % 2 === 1 ? user1 : user2;
}