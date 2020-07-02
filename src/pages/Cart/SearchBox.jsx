import React from 'react'

export default class SearchBox extends React.Component
{
    constructor(props){
        super(props);
    }

    handleChange(e){
        this.props.onSearch(e.target.value);
    }

    handleChecked(e){
        this.props.onChecked(e.target.checked);
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text"
                        onChange={this.handleChange.bind(this)}
                        placeholder="Search..." />
                    <label>
                        <input type="checkbox" 
                        onChange={this.handleChecked.bind(this)} />
                        <span>Only show products in stock</span>
                    </label>
                </form>
            </div>
        );
    }
}