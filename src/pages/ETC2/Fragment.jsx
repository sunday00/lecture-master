import React from 'react'

import LikeClass from './LikeClass';

export default class Fragment extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){

        const DynamicTag = LikeClass.MethodStyle;

        return(
            <>
                <h2>Fragment</h2>

                <>
                    <h3>sOn</h3>
                </>

                {[1,2,3].map((n) => {
                    return (
                        <>
                            <span>{n}</span>
                        </>
                    ); // this make key warning
                })} 

                {[1,2,3].map((n, index) => {
                    return (
                        <React.Fragment key={index}>
                            <span>{n}</span>
                        </React.Fragment>
                    ); // this is fine
                })}

                <hr/>

                <LikeClass.MethodStyle />

                <DynamicTag />
            </>
        );
    }
}