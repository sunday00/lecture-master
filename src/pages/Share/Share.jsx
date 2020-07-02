import React from 'react';
import Calculator from './Calculator';


export default class Share extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Calculator />
            </div>
        );
    }
}