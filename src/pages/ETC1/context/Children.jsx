import React from 'react';
import Item from './Item';
import Item2 from './Item2';

export default class Children extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <li>this is : <Item /></li>
                <li>this is : <Item2 /></li>
            </>
        );
    }
}