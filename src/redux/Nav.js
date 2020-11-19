import React, {useState, useEffect} from 'react';
import {store} from './stores/nav';
import {store as articleStore} from './stores/article';
import {store as homeStore} from './stores/home';

export default function Nav(props)
{
 
    const [list, setList] = useState(store.getState());
    store.subscribe( () => { setList(store.getState()) } );

    useEffect(() => {
        setList( store.getState() );
    }, [list]);

    function makeList(list){
        return list.map(l => {
            return (
                <li key={l.id}><a href={l.href} onClick={(e) => {onClick(e, l.id)}}>{l.title}</a></li>
            );
        })
    }

    function onClick(e, id){
        e.preventDefault();
        homeStore.dispatch({type:'CHANGE_MODE', mode:'read'});
        articleStore.dispatch({type:'CHANGE_ARTICLE', currentId:id});
    }

    return (
        <nav>
            <ul>
                {makeList(list)}
            </ul>
            {console.log('render lists')}
        </nav>
    );
}
