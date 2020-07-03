import React from 'react';

export const ThemeContext3 = React.createContext({
    arg: 1,
    toggleTheme2: () => { console.log(1) } ,
    btnName: 'default'
}); 