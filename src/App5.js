import React, {useState} from 'react';
import Plain from './reactRedux/Plain';
import Plain2 from './reactRedux/Plain2';
import Reduxed from './reactRedux/Reduxed';
import Reduxed2 from './reactRedux/Reduxed2';
import './resources/App5.css';

import {Provider} from 'react-redux';
import {store} from './reactRedux/ReduxedStore';
import ReactReduxed from './reactRedux/ReactReduxed';
import ReactReduxed2 from './reactRedux/ReactReduxed2';

export default function App5(props)
{
    const [number, setNumber] = useState(0);

    return (
        <section className="section">
            <section className="section">
                <h1>ROOT</h1>
                <Plain onPlus={(incrementSize) => {setNumber(number + incrementSize)}} />
                <Plain2 number={number} />
            </section>
            <section className="section">
                <h1>ROOT</h1>
                <Reduxed /*onPlus={(incrementSize) => {setNumber(number + incrementSize)}}*/ />
                <Reduxed2 /*number={number}*/ />
            </section>
            <section className="section">
                <Provider store={store}>
                    <h1>ROOT</h1>
                    <ReactReduxed />
                    <ReactReduxed2 />
                </Provider>
            </section>
        </section>
    );
}
