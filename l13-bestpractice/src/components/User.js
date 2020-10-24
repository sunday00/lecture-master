import React, { useEffect, useState } from 'react'

export default function User(props)
{
    const [user, setUser] = useState(USERS_LIST[props.userId]);

    useEffect(() => {
        const user = USERS_LIST.find( u => u.id === props.userId);
        user ? setUser(USERS_LIST[props.userId]) : console.log('no user');
    }, [props.userId]);

    return (
        <>
            <img src={`https://via.placeholder.com/120x120/${user.avatar}`} alt=""/>
            <p>name : {user.name}</p>
            <p>age : {user.age}</p>
        </>
    );
}

const USERS_LIST = [
    {id: 0, avatar: 'FF0000', name: 'red man', age: 10},
    {id: 1, avatar: '0000FF', name: 'blue girl', age: 22},
    {id: 2, avatar: '00FF00', name: 'green boy', age: 75},
    {id: 3, avatar: 'FF00FF', name: 'pink!', age: 48},
];