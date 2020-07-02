import React from 'react'

export default class MultiSlot extends React.Component
{
    render(){
        return(
            <div>
                <div className="h1">{this.props.h1}</div>
                <div className="h2">{this.props.h2}</div>
            </div>
        );
    }
}