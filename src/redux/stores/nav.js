import { createStore } from 'redux';

function reducer(state, action){
    if( state === undefined ){
        return [
            {id: 1, title:'HTML', desc: 'html is hyper text markup language.', href: '#html'},
            {id: 2, title:'CSS', desc: 'css is cascade style sheet.', href: '#2'},
            {id: 3, title:'JS', desc: 'js is java script. Some actions for browser.', href: '#3'},
        ];
    }
    return action.list;
}
export const store = createStore(reducer);