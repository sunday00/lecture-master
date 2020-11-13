import React from 'react'
import Container from '@material-ui/core/Container';

export default class ClassStyleApp extends React.Component
{

    constructor(){
        super();

    }

    render(){
        return (
            <Container maxWidth="sm">
                <h1>Class</h1>
            </Container>
        );
    }
}
