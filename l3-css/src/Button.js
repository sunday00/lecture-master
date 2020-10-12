import React from 'react';

import './app.css';
import Border from './app.module.css';

export default class Button extends React.Component{

    componentDidMount() {
        window.onpopstate = function (e) {
            console.log(window.location, e.state);
        }
    }

    goTo = (e, path) => {
        window.history.pushState(path, `go to ${path}`, `/${path}`);
    }

    render(){
        return <button className={`btn ${this.props.size} ${Border.border} ${Border.magenta}`}
        onClick={(e) => {this.goTo(e, this.props.size)}}
        >{this.props.size} button</button>;
    }
}