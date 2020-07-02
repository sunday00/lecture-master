import React from 'react'

export default class Item extends React.Component
{
    spanStyle = {
        display: 'inline-block',
        width: '30%',
        marginRight: "10px",
        fontWeight: this.props.data.stocked ? '' : 'bold',
        color: this.props.data.stocked ? '' : 'tomato',
        textDecoration: this.props.data.stocked ? '' : 'line-through',
    }

    listStyle = {
        listStyle: "none"
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li style={this.listStyle}>
                <p>
                    <span style={this.spanStyle}>{this.props.data.name}</span>
                    <span>{this.props.data.price}</span>
                </p>
            </li>
        );
    }
}