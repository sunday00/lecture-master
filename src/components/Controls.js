import React from 'react'

export default function Controls(props)
{
    
    function onClick (e, mode) {
        e.preventDefault();
        props.onChangePage(e, null, mode);
    }

    return (
        <ul>
            <li>
                <a href="/create" onClick={(e) => onClick(e, 'create')}>CREATE</a>
            </li>
            <li>
                <a href="/update" onClick={(e) => onClick(e, 'update')}>UPDATE</a>
            </li>
            <li>
                <button onClick={(e) => onClick(e, 'delete')}>DELETE</button>
            </li>
        </ul>
    );
}
