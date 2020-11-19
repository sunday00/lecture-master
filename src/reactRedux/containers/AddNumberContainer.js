import React from 'react';
import AddNumber from '../AddNumber';
import {store} from '../ReduxedStore';

export default function AddNumberContainer(props)
{
    
    const onClick = (incrementSize) => {
        store.dispatch({type:'INCREMENT_SIZE', incrementSize: incrementSize});
    }

    return (
        
        <AddNumber onPlus={onClick}></AddNumber>
        
    );
}
