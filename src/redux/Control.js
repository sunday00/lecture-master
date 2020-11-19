import React from 'react';
import { store } from './stores/home';
import { store as articleStore } from './stores/article';
import { store as navStore } from './stores/nav';

export default function Control(props)
{
    function onDelete(){
        const id = articleStore.getState().currentId;
        if( id === 0 ) return false;
        const newList = Array.from(navStore.getState()).filter(l => l.id !== id);
        navStore.dispatch({type:'DELETE_ARTICLE', list:newList});
        articleStore.dispatch({type:'CHANGE_ARTICLE', currentId:0});
    }

    return (
        <ul>
            <li><button onClick={ () => store.dispatch({type:'CHANGE_MODE', mode:'create'}) }>Create</button></li>
            <li><button onClick={ onDelete }>Delete</button></li>
        </ul>
    );
}
