import React from 'react'

export default function Controls(props)
{
    
    function onClick (e, mode) {
        e.preventDefault();

        props.onChangePage(null, mode);
    }

    return (
        <ul>
            <li>
                <a href="/create" onClick={(e) => onClick(e, 'create')}>CREATE</a>
            </li>
            { props.mode === 'read' && <li>
                <a href="/update" onClick={(e) => onClick(e, 'update')}>UPDATE</a>
            </li>}
            { props.mode === 'read' && <li>
                <button onClick={props.onDelete}>DELETE</button>
            </li>
            }
        </ul>
    );
}
