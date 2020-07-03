import React from 'react'
import Children from './Children';
import Children2 from './Children2';
import Children3 from './Children3';
import Children4 from './Children4';

import { ThemeContext2, themes } from './Theme2';
import { ThemeContext3 } from './Theme3';

import MultipleContext1 from './MultipleContext1';
import MultipleContext2 from './MultipleContext2';

export default class Middle extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            arg: 4,
            theme: themes.light,
            toggleTheme2: this.toggleTheme2,
            btnName:'this is come from Middle parent',
            mulProp1: { animal:'lion' },
            mulProp2: { color: 'yellow' }
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
                <div>
                    <MultipleContext1.Provider value={this.state.mulProp1}>
                        <MultipleContext2.Provider value={this.state.mulProp2}>
                            <Children4></Children4>
                        </MultipleContext2.Provider>
                    </MultipleContext1.Provider>
                    <Children4></Children4>
                </div>
            </>
        );
    }
}