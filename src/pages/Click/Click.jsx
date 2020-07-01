import React from 'react';

export default class Click extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {toggleOn: true}
    }

    handleClick(arg, e) {
        e.preventDefault();
        console.log(arg);
        this.setState(state => {
            return {
                toggleOn : !state.toggleOn
            }
        });
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick.bind(this, 1)}>{this.state.toggleOn ? 'on' : 'off'}</button>
            </div>
        );
    }
}