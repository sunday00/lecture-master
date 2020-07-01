import React from 'react'

function LiEle (props) {
    return (
        <li>{props.num}</li>
    );
}

export default class Loop extends React.Component
{
    // constructor(props){
    //     super(props);
    // }

    listItems() {
        const numbers = [1,2,3,4,5,6,7,8,9];
        return numbers.map((num, index) => {
            // return <li key={index}>{num}</li>
            return <LiEle key={index} num={num} />
        });
    }

    render(){
        return(
            <ul>
                {this.listItems()}
            </ul>
        );
    }
}