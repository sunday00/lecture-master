import React from 'react';

import SearchBox from './SearchBox';
import MainList from './MainList';

export default class Cart extends React.Component
{

    wrapStyle = {
        border: "1px solid gold",
        width: "40%",
        margin: "20px auto",
        padding: "20px"
    }

    constructor(props){
        super(props);
        this.state = {
            search: '',
            toggleOnlyStock: false
        }
    }

    handleSearch(str){
        this.setState({
            search : str
        });
    }

    handleChecked(checked){
        this.setState({
            toggleOnlyStock : checked
        });
    }

    render(){
        
        return(
            <div style={this.wrapStyle}>
                <h1>Cart</h1>
                <div className="wrap">
                    <SearchBox onSearch={this.handleSearch.bind(this)} 
                        onChecked={this.handleChecked.bind(this)}
                    />
                    <MainList search={this.state.search} 
                        toggleOnlyStock={this.state.toggleOnlyStock}
                    />
                </div>
            </div>
        );
    }
}