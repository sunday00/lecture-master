import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

export default function FunctionalApp(props)
{

    const [number, setNumber] = useState(props.initNumber);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('%c functional component did mount and updated called', 'color:cornflowerblue;');
        return function () {
            console.log('%c functional component unmount... cleanup', 'color:cornflowerblue;');
        }
    }, /*[]*/)

    function getRandomNumber () {
        setNumber(Math.random());
    };

    return (
        <Container maxWidth="sm">
            <h1>Functional</h1>
            <p>{number}</p>
            <Button onClick={getRandomNumber} color='primary' variant="outlined" style={{marginBottom:'10px'}}>Click</Button>
            <hr />
            <p>date: {date.toString()}</p>
        </Container>
    );
}
