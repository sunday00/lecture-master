import React from 'react';
import Item from './Item';

export default class List extends React.Component
{
    bold = {
        fontWeight: 'bold'
    }    

    render(){
        return(
            <div>
                <p style={this.bold}>{this.props.category}</p>
                <ul>
                    {
                        this.props.items.map((item) => {
                            return <Item key={item.name} data={item}></Item>
                        })
                    }
                </ul>
            </div>
        );
    }
}