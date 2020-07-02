import React from 'react'

import ThemeContext from './Theme';

export default class Item extends React.Component
{
    static contextType = ThemeContext;
    
    render(){
        return(
        <a href="/">{this.context}</a>
        );
    }
}