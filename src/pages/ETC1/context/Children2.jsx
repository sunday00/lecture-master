import React from 'react'

import { ThemeContext2 } from './Theme2';

export default class Children2 extends React.Component
{
    static contextType = ThemeContext2;

    constructor(props){
        super(props);
    }
    render(){
        let props = this.props;
        let theme = this.context;
        return(
            <>
                <button 
                    onClick={this.props.onChgTheme}
                    style={{backgroundColor:theme.background, color:theme.foreground}}
                    >BBBB</button>
            </>
        );
    }
}