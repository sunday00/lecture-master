import React from 'react'

class Child extends React.Component
{
    render(){
        return(
            <>
                <input type="text" ref={this.props.childRef}/>
            </>
        );
    }
}

export default class Ref extends React.Component
{
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.childRef = React.createRef();
    }

    aStyle={
        marginLeft: "5px",
        marginRight: "5px"
    }

    handleAClick(e){
        e.preventDefault();
        this.textInput.current.focus();
    }

    handleAClick2(e){
        e.preventDefault();
        this.childRef.current.focus();
    }

    render(){
        return(
            <>
                <input type="text" ref={this.textInput} />
                <a href="/index" style={this.aStyle} onClick={this.handleAClick.bind(this)}>focus to left input</a>

                <Child childRef={this.childRef}></Child>
                <a href="/index" style={this.aStyle} onClick={this.handleAClick2.bind(this)}>focus to left input</a>
            </>
        );
    }
}