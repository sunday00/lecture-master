import React, { useRef } from 'react'
import Profile from './Profile';

export default function Hook4(props)
{
    const profileRef = useRef();

    function onClick(e){
        if( profileRef.current ){
            const pc = profileRef.current;
            pc.addN(2);
        }
    }

    return (
        <>
            <div>
                <Profile ref={profileRef}></Profile>
                <button onClick={onClick}>c</button>
            </div>
        </>
    );
}
