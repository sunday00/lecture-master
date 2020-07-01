import React from 'react'

export default class Select extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            selectedValue: 'yellow',
            selectedMulValue: ['3', '4']
        };
    }

    handleChange(e){
        this.setState({ selectedValue: e.target.value });
    }

    handleMulChange(e){
        let prev = this.state.selectedMulValue;
        let newState = prev;
        if( this.state.selectedMulValue.indexOf(e.target.value) >= 0 ){
            newState.splice( this.state.selectedMulValue.indexOf(e.target.value), 1 );
        } else {
            newState.push(e.target.value);
        }
        // console.log( this.state.selectedMulValue );
        this.setState({ selectedMulValue: newState });
    }

    handleSubmit(e){
        e.preventDefault();
        console.table( this.state );
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <select onChange={this.handleChange.bind(this)}
                    value={this.state.selectedValue}
                    >
                    <option value="red">apple</option>
                    <option value="yellow">banana</option>
                    <option value="darkred">cherry</option>
                </select>
                <select multiple 
                    onChange={this.handleMulChange.bind(this)}
                    value={this.state.selectedMulValue}
                    >
                    <option value="1">foo</option>
                    <option value="2">bar</option>
                    <option value="3">baz</option>
                    <option value="4">qux</option>
                    <option value="5">quux</option>
                </select>
                <input type="submit" value="fruit?"/>
            </form>
        );
    }
}