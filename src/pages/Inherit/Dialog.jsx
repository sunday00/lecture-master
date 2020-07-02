import React from 'react'

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

class Dialog extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <FancyBorder>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
                {this.props.children}
            </FancyBorder>
        );
    }
}

export default class SignUpDialog extends React.Component
{
    constructor(props){
        super(props);
        this.state = {login:''}
    }

    handleChange(e){
        this.setState({login : e.target.value});
    }

    handleSign(e){
        console.log( this.state.login );
    }

    render(){
        return(
            <Dialog title="HI" message="Good morning">
                <input type="text" 
                    onChange={this.handleChange.bind(this)}
                    value={this.state.login} />
                <button onClick={this.handleSign.bind(this)}>Sign</button>
            </Dialog>
        );
    }
}