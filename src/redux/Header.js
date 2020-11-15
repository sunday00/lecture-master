import React from 'react'
import {store} from './stores/article';

export default function Header(props)
{
    function onClick(e){
        e.preventDefault();
        store.dispatch({type:'CHANGE_ARTICLE', currentId:0});
    } 

    return (
        <header>
            <h1><a href="/" onClick={onClick}>{props.title}</a></h1>
            <p>{props.desc}</p>
        </header>
    );
}
