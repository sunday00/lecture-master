// import React, {useState} from 'react';
import DisplayNumber from '../DisplayNumber';
// import {store} from '../ReduxedStore';

import {connect} from 'react-redux';

// export default function DisplayContainer(props)
// {
//     const [number, setNumber] = useState(store.getState().number);
//     store.subscribe(() => { setNumber(store.getState().number) });
    
//     return (
        
//         <DisplayNumber number={number}></DisplayNumber>
    
//     );
// }

function subscribe(state){
    return { number: state.number }
}


export default connect(subscribe)(DisplayNumber);
