import React, { useState } from 'react'
import PropTypes from 'prop-types'

Practice.propTypes = {
    number: PropTypes.number,
    type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
    middleNumber : function (props, propName, componentName) { 
        console.log(props, propName, componentName);
        if( props[propName] > 100) return new Error('Big number');
    }
}

export default function Practice(props)
{
    const [n, setN] = useState(0);

    logOneHero(n % 4);

    console.log( props.type );
    console.log( props.middleNumber );

    return (
        <>
            <h2>{n}</h2>
            <div>
                <button onClick={() => setN(n + 1)}>+</button>
            </div>
        </>
    );
}

const STUDENTS = [
    {id: 0, name: 'joker', type: 'villain'},
    {id: 1, name: 'batman', type: 'hero'},
    {id: 2, name: 'riddler', type: 'villain'},
    {id: 3, name: 'superman', type: 'hero'},
];

function logOneHero (id) {
    console.log( STUDENTS.find( h => h.id === id ) );
}