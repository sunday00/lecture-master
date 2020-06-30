import React from 'react';
import ReactDOM from 'react-dom';

// export default function Clock (props) {
//     return (
//       <div>
//         <h1>Hello clock</h1>
//         <h2>{props.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }

// export default class Clock extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>Hello Clock!!</h1>
//                 <h2>{this.props.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }

export default class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => {
            return this.tick()
        }, 1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        // do not
        // this.state.date = new Date();

        //try
        // this.setState((state, props) => {});
    }

    render() {
        return (
            <div>
                <h1>Hello Clock!!</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
