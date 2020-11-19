import React from 'react'
import {store} from './stores/article';
import {store as homeStore} from './stores/home';

export default function Header(props)
{
    function onClick(e){
        e.preventDefault();
        store.dispatch({type:'CHANGE_ARTICLE', currentId:0});
        homeStore.dispatch({type:'CHANGE_MODE', mode:'read'});
    } 

    return (
        <header>
            <h1><a href="/" onClick={onClick}>{props.title}</a></h1>
            <p>{props.desc}</p>
        </header>
    );
}
