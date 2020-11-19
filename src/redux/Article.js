import React, { useState, useEffect } from 'react';
import {store} from './stores/article';
import {store as navStore} from './stores/nav';
import {store as homeStore} from './stores/home';

export default function Article(props)
{
    const [id, setId] = useState(store.getState().currentId)
    store.subscribe(() => {
        setId(store.getState().currentId);
    });
    
    return (<>
        <TitleAndDesc id={id}/>    
    </>);
    
}

function TitleAndDesc (props) {
    const [content, setContent] = useState({ id:0, title:'welcome', desc: 'Hello redux'});

    useEffect(() => {
        setContent(props.id === 0 ? {
            id: 0,
            title: 'welcome',
            desc: 'Hello redux'
        } : navStore.getState().find(l => l.id === props.id));
    }, [props.id])

    return (<article style={{display: homeStore.getState() === 'read' ? 'block' : 'none'}}>
        <h2>{content.title}</h2>
        <p>{content.desc}</p>
        {console.log('render article')}
    </article>);
}