import React, {useState} from 'react';
import { createStore } from 'redux';

export default function App3(props)
{
    const [color, setColor] = useState(store.getState().color);
    store.subscribe(() => setColor(store.getState().color));

    return (
        <>
            <Component color="red" backgroundColor={color} /*onSetColor={setColor}*/></Component>
            <Component color="blue" backgroundColor={color} /*onSetColor={setColor}*/></Component>
            <Component color="hotpink" backgroundColor={color} /*onSetColor={setColor}*/></Component>
            <Component color="green" backgroundColor={color} /*onSetColor={setColor}*/></Component>
        </>
    );
}

function Component (props) {
    return (
        <div className={`component ${props.color}`} style={{border:'2px solid', backgroundColor:props.backgroundColor}}>
            {/* <button onClick={() => {props.onSetColor(props.color)}}>{props.color}</button> */}
            <button onClick={() => {store.dispatch({type:'CHANGE_COLOR', color:props.color})}}>{props.color}</button>
        </div>
    );
}

function reducer (state, action) {
    if( state === undefined ){
        return {color: 'gold'}
    }
    if( action.type === "CHANGE_COLOR" ){
        const newState = Object.assign({}, state);
        newState.color = action.color;
        return newState;
    }
    return state;
}

const store = createStore(reducer, /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);