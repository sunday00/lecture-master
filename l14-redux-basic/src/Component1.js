import React from 'react'
import { useState } from 'react';
import {userList, newPerson} from './users'

export default function Component1(props)
{
    
    const [user, setUser] = useState(userList);



    return (
        <>
            <div>
                <ul>
                    {user.map(u => (
                            <li key={u.id}>{u.name} : {u.age}</li>
                    ))}
                </ul>
            </div>
            <div className="p-4">
                <button className="btn btn-success" onClick={ () => setUser(newPerson) }>Go</button>
            </div>
        </>
    );
}
