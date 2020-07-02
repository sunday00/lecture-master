import React from 'react'
import Children from './Children';

export default class Middle extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <>
                <h2>Parent</h2>
                <ul>
                    <Children />
                </ul>
            </>
        );
    }
}