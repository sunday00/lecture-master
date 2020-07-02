import React from 'react'

class Mother extends React.Component
{
    render(){

        const body = this.props.body || 'this is mother';

        return(
            <div>
                <header>{this.props.header}</header>
                <div>{body}</div>
            </div>
        );
    }
}

export default class Specialize extends React.Component
{
    render(){
        return(
            <div>
                <Mother header="HI," />
                <hr />
                <Mother header="HI," body=" this is child" />
            </div>
        );
    }
}