import React, {useState} from 'react';
import { createStore } from 'redux';

import Header from './redux/Header';
import Nav from './redux/Nav';
import Control from './redux/Control';
import Article from './redux/Article';

export default function App4(props)
{
    

    return (
        <section className="container">
            <Header title='WEB' desc='hello redux'></Header>
            <Nav></Nav>
            <Control></Control>
            <Article></Article>
        </section>
    );
}

