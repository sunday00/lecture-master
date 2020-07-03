import React from 'react'
import ErrorComponent from './ErrorComponent';
import ErrorOccur from './ErrorOccur';

export default class ErrorBound extends React.Component
{
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <>
                <ErrorComponent>
                    <ErrorOccur></ErrorOccur>
                </ErrorComponent>
            </>
        )
    }
}