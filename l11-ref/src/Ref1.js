import { random } from 'lodash';
import React, { useState, useRef, useEffect } from 'react'

export default function Ref1 (props)
{
    const [int1, setInt1] = useState('something');
    
    const inputRef = useRef();
    const box = useRef();

    useEffect(() => {
        const inputElement = inputRef.current;
        inputElement.focus();
    })

    function changValue(e){
        e.preventDefault();
        const inputElement = inputRef.current;
        setInt1(inputElement.value ? inputElement.value : 'something');
        inputElement.value = '';
        inputElement.focus();
    }

    function keyPress(e){
        if (e.key === 'Enter'){
            changValue(e);
            callChild(random(10));
        }
    }

    function callChild(i){
        const boxElement = box.current;
        const n = boxElement.getNumber(i);
        console.log(n);
    }

    return (
        <>
            <div>
                <p>{int1}</p>
                <input type="text" ref={inputRef} onKeyDown={keyPress} />
                <button onClick={changValue}>Chang value</button>
                <Box ref={box} />
            </div>
        </>
    );
}

class Box extends React.Component {


    getNumber(i){
        return i;
    }

    render(){
        return (
            <>
                <h2>This is box</h2>
            </>
        );
    }
}