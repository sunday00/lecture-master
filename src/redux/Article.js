import React, { useState } from 'react';
import {store} from './stores/article';
import {store as navStore} from './stores/nav';

export default function Article(props)
{
    
    const [currentId, setCurrentId] = useState(0);
    store.subscribe(() => setCurrentId(store.getState().currentId));

    function makeArticle(id){
        const content = id === 0 ? { id:0, title:'welcome', desc: 'Hello redux'} : navStore.getState().find(l => l.id === id) ;
        
        return(
            <>
                <h2>{content.title}</h2>
                <p>{content.desc}</p>
            </>
        );
    }

    return (
        <article>
            {makeArticle(currentId)}
            {console.log('re-render article')}
        </article>
    );
}
