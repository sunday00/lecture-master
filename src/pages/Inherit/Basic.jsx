import React from 'react';
import FancyBorder from './FancyBorder';
import MultipleSlot from './MultiSlot';

export default class Basic extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <FancyBorder color="blue">
                    <h1 className="Dialog-title">Welcome</h1>
                    <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
                </FancyBorder>
                <MultipleSlot h1={<h1>h1</h1>} h2={<h2>h2</h2>} />
            </div>
        );
    }
}