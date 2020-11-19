import React, {useState} from 'react';
import { store } from './redux/stores/home';

import Header from './redux/Header';
import Nav from './redux/Nav';
import Control from './redux/Control';
import Article from './redux/Article';
import Create from './redux/Create';

export default function App4(props)
{
    const [mode, setMode] = useState('read');
    store.subscribe(() => {setMode( store.getState() )});

    return (
        <section className="container">
            <Header title='WEB' desc='hello redux'></Header>
            <Nav></Nav>
            <Control></Control>
            <Article></Article>
            {mode === 'create' && <Create></Create>}
        </section>
    );
}

