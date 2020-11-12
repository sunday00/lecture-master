import React from 'react';

function NavList (props)
{
    function onClick (e, li) {
        e.preventDefault();
        props.onChangePage(li.id, 'read')
    }
    
    return (
        <ul>
            {props.list && props.list.map((li) => (
                <li key={li.id}><a href={li.href} onClick={(e) => {onClick(e, li)}}>{li.title}</a></li>
            ))}
        </ul>
    );
}

export default NavList;