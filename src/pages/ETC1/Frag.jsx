import React, { Fragment } from 'react';

export default class Frag extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            // <Fragment>
            //     <h1>Frag?</h1>
            //     <h2>multiple elements but</h2>
            //     <p>I don't want to use more div</p>
            // </Fragment>

            <>
            <h1>Frag?</h1>
            <h2>multiple elements but</h2>
            <p>I don't want to use more div</p>
            </>
        );
    }
}