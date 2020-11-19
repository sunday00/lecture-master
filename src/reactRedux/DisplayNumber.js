import React from 'react';
// import {store} from './ReduxedStore';

export default function DisplayNumber (props)
{
    // const [number, setNumber] = useState(store.getState().number);
    // store.subscribe(() => { setNumber(store.getState().number) });

    return (
        <section className="section">
            <h3>Display number</h3>
            {/* <input type="text" name="display" readOnly value={props.number} /> */}
            <input type="text" name="display" readOnly value={props.number} />
        </section>
    );
}
