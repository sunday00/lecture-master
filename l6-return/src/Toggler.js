import React from 'react';

export default class Toggler extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            isTrue: false,
            style : {
                padding: '10px',
                fontSize: '2rem',
                color: 'white',
                backgroundColor: 'tomato'
            }
        }
    }

    activeToggle = (e) => {
        e.preventDefault();
        let isTrue = !this.state.isTrue;

        this.setState({ 
            isTrue,
            style: {
                ...this.state.style,
                backgroundColor: isTrue ? 'cornflowerblue' : 'tomato'
            }
        });

        if (this.props.hasOwnProperty('onToggle')) this.props.onToggle(isTrue);
    }
    
    render(){
        return (
            <React.Fragment>
                <button onClick={this.activeToggle} style={this.state.style}>Toggle : {this.state.isTrue ? 'T' : 'F'}</button>
            </React.Fragment>
        );
    }
}

