import React from 'react'
import { useRef } from 'react';

export default function Ref2(props)
{
    const inputRef = useRef();

    function ooo(e,v){
        console.log(e,v);
    }

    return (
        <>
            <div>
                <Button ref={inputRef} 
                // @ts-ignore
                onOOO={(e, v) => ooo(e, v)}></Button>
                <AAA vvv="ac"></AAA>
            </div>
        </>
    );
}

function AAA (props) {
    return (<> <h3>{props.vvv}</h3> </>);
}

const Button = React.forwardRef( function (props, inputRef) {

    function ccc(e){
        // @ts-ignore
        props.onOOO(e, 3)
    }

    return (
        <>
            <input type="text" ref={inputRef}></input>
            <button onClick={ccc}>Click</button>
        </>
    );
});