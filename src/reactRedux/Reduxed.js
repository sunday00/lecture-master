import React from 'react';
import AddNumberContainer from './containers/AddNumberContainer';

export default function Reduxed(props)
{
    
    return (
        <section className="section">
            <h2>Add number root</h2>
            {
                //<AddNumber /*onPlus={props.onPlus}*/></AddNumber>
            }
            <AddNumberContainer></AddNumberContainer>
        </section>
    );
}
