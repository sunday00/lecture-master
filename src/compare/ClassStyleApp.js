import React from 'react'
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

export default class ClassStyleApp extends React.Component
{
    constructor(props){
        super();
        this.state = {
            number: props.initNumber,
            date: new Date()
        }
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }

    getRandomNumber () {
        this.setState({
            number: Math.random()
        });
    };

    componentDidMount(){
        console.log('%c class component did mount called', 'color:tomato;');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState);
        return true;
    }

    render(){
        return (
            <Container maxWidth="sm">
                <h1>Class</h1>
                <p>{this.state.number}</p>
                <Button onClick={this.getRandomNumber} color='primary' variant="outlined" style={{marginBottom:'10px'}}>Click</Button>
                <hr />
                <p>date: {this.state.date.toString()}</p>
            </Container>
        );
    }
}
