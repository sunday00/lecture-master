import React from 'react'

function Header (props)
{

    function onClick (e) {
        e.preventDefault();
        props.onChangePage(e, 'welcome')
    }

    return (
        <header>
            <h1><a href="/" onClick={onClick}>{props.mainTitle}</a></h1>
            <p>{props.subTitle}</p>
        </header>
    );
}

export default Header;