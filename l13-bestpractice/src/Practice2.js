import React, { useState } from 'react'
import User from './components/User'
import SuperFixed from './components/SUPER-FIXED'

export default function Practice2(props)
{
    const [userId, setUserId] = useState(0);
    const [loadedId, setLoadedId] = useState(0);

    function onChange(e) {
        const v = e.target.value;
        // @ts-ignore
        v !== '' ? setUserId( parseInt(e.target.value) ) : setUserId('');
    }

    function getNewUser(e){
        setLoadedId(userId);
    }



    return (
        <div>
            <div className="user-info">
                <User userId={loadedId} />
                <input type="number" value={userId} onChange={ onChange }/>
                <button onClick={getNewUser}>another user</button>
            </div>

            <div>
                <SuperFixed p={userId}></SuperFixed>
            </div>
        </div>
    );
}
