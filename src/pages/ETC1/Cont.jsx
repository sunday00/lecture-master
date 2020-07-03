import React from 'react';
import Middle from './context/Middle';

import ThemeContext from './context/Theme';

export default class Cont extends React.Component
{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ThemeContext.Provider value="dark">
                <h1>Ancestor</h1>
                <Middle />
            </ThemeContext.Provider>
        );
    }
}



