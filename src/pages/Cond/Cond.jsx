import React from 'react';
import On from './On';
import Off from './Off';


export default class Cond extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            s : true
        }
    }

    toggleSwch = (e) => {
        this.setState({
            s : !this.state.s
        });
    }

    componentDidUpdate() {
        console.log('just hide, component memory still use...');
    }

    render() {
        if ( this.props.match.params.isShow === 'false' ) return null;
        return (
            <div>
                {this.state.s ? <On /> : <Off />}
                <button onClick={this.toggleSwch}>Swch</button>
            </div>
        );
    }

}