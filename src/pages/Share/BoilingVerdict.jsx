import React from 'react'

export default class BoilingVerdict extends React.Component
{
    render(){
        if( this.props.celsius >= 100 ){
            return (
                <p>Now Water Boiling</p>
            );
        }
        return (
            <p>Temperature is too low...</p>
        );
    }
}