import React from 'react'

import MultipleContext1 from './MultipleContext1';
import MultipleContext2 from './MultipleContext2';

export default class Children4 extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <MultipleContext1.Consumer>
                    {( {animal} ) => {
                        return (
                            <MultipleContext2.Consumer>
                                {({color}) => (
                                    <h2>
                                        <span>{animal}</span> : <span>{color}</span>
                                    </h2>
                                )}
                            </MultipleContext2.Consumer>
                        );
                    }}
                </MultipleContext1.Consumer>
            </>
        );
    }
}