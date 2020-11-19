import React from 'react';
// import DisplayNumber from './DisplayNumber'
import DisplayNumberContainer from './containers/ReactReduxedDisplayNumberContainer';

export default function ReactReduxed2(props)
{
    
    return (
        <section className="section">
            <h2>Display number root</h2>
            {
                //<DisplayNumber /*number={props.number}*/></DisplayNumber>
            }
            <DisplayNumberContainer></DisplayNumberContainer>
        </section>
    );
}


