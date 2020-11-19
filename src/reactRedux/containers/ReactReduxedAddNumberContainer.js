// import React from 'react';
import AddNumber from '../AddNumber';
// import {store} from '../ReduxedStore';
import {connect} from 'react-redux';

// export default function ReactReduxedAddNumberContainer(props)
// {
    
//     const onClick = (incrementSize) => {
//         store.dispatch({type:'INCREMENT_SIZE', incrementSize: incrementSize});
//     }

//     return (
        
//         <AddNumber onPlus={onClick}></AddNumber>
        
//     );
// }

function dispatcher(dispatch){
    return {
        onPlus: (incrementSize) => {
            dispatch({type:'INCREMENT_SIZE', incrementSize: incrementSize});
        }
    }
}

export default connect(null, dispatcher)(AddNumber);