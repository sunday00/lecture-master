import React from 'react'
import PropTypes from 'prop-types';

class Children extends React.Component
{
    render(){
        return (
            <>
                hello {this.props.type}
            </>
        );
    }
}

Children.propTypes = {
    type: PropTypes.string
}

export default class Typecheck extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h2>type</h2>
                <Children type={"1"}></Children>
            </>
        );
    }
}
