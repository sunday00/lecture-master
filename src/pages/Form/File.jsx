import React from 'react'

export default class File extends React.Component
{
    constructor(props){
        super(props);
        this.state = {}
    }

    handleChange(e){
        console.log(e.target.name);
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    submitHandler(e){
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <form onSubmit={this.submitHandler.bind(this)}>
                <input type="file" name="f" onChange={this.handleChange.bind(this)} />
                <input type="text" name="t" onChange={this.handleChange.bind(this)}/>
                <input type="text" name="e" value="this is not editable" />
                <input type="text" name="e2" value={null} placeholder="but this is editable. but don`t do this!" />
                <input type="submit" value="submit"/>
            </form>
        );
    }
}