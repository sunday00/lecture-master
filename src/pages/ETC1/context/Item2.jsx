import React from 'react'

import ThemeContext from './Theme';

export default class Item2 extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ThemeContext.Consumer>
                { value => { console.log(value); return (<a>{value}</a>) } }
            </ThemeContext.Consumer>
        );
    }
}