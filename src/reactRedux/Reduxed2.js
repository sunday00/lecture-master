import React, {useState} from 'react';
// import DisplayNumber from './DisplayNumber'
import DisplayNumberContainer from './containers/DisplayNumberContainer';

export default function Reduxed2(props)
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


