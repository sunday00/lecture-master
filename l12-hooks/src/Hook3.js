import React, { useReducer, useState } from 'react'

export default function Hook3(props)
{
    const [state, dispatch] = useReducer(reducer, {title:'tomato', color:'tomato'});
    const [isChanged, setIsChanged] = useState(false);

    return (
        <>
            <div style={{
                backgroundColor: state.color
            }} onClick={ e => dispatch( {title:'cornflowerblue', color:'cornflowerblue', isChanged:isChanged, setIsChanged: setIsChanged} ) }>
                BOX {state.title}
            </div>
        </>
    );
}

function reducer (state, action) {
    console.log(action.isChanged);
    console.log(action);
    action.setIsChanged(true);
    return { title: action.title, color: action.color }
}