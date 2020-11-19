import React from 'react';
import {store as navStore} from './stores/nav';
import {store as homeStore} from './stores/home';
import {store as articleStore} from './stores/article';

export default function Create(props)
{
    function onSubmit(e){
        e.preventDefault();
        const oldState = Array.from(navStore.getState());
        const newState = oldState.concat([{
            id: oldState[oldState.length - 1].id + 1,
            title: e.target.title.value,
            desc: e.target.desc.value,
            href: '#'+e.target.title.value.toLowerCase(),
        }]);
        navStore.dispatch({type:'UPDATE_LIST', list:newState});
        homeStore.dispatch({type:'CHANGE_MODE', mode:'read'});
        articleStore.dispatch({type:'CHANGE_ARTICLE', currentId:oldState[oldState.length - 1].id + 1});
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="title" placeholder="title" />
            <textarea name="desc" placeholder="desc"></textarea>
            <input type="submit" value="OK" />
            {console.log('render create form')}
        </form>
    );
}
