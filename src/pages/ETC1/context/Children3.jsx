import React from 'react'

import { ThemeContext3 } from './Theme3';

export default class Children3 extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ThemeContext3.Consumer>
                {({toggleTheme2, btnName}) => {
                    return (
                        <button onClick={toggleTheme2}>{btnName}</button>
                    );
                }}
            </ThemeContext3.Consumer>
        );
    }
}