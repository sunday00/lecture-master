import React from 'react'
import Children from './Children';
import Children2 from './Children2';
import Children3 from './Children3';

import { ThemeContext2, themes } from './Theme2';
import { ThemeContext3 } from './Theme3';


export default class Middle extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            arg: 4,
            theme: themes.light,
            toggleTheme2: this.toggleTheme2,
            btnName:'this is come from Middle parent'
        };
    }

    toggleTheme2 = () => {
        console.log(this.state.arg);
    }

    toggleTheme(){
        this.setState({ theme: this.state.theme === themes.dark ? themes.light : themes.dark });
    }

    render(){
        
        return(
            <>
                <h2>Parent</h2>
                <ul>
                    <Children />
                </ul>
                <p>
                    <ThemeContext2.Provider value={this.state.theme}>
                        <Children2 onChgTheme={this.toggleTheme.bind(this)}/>
                    </ThemeContext2.Provider>
                </p>
                <p>
                    <ThemeContext3.Provider value={this.state}>
                        <Children3 />
                    </ThemeContext3.Provider>
                    <Children3 />
                </p>
            </>
        );
    }
}