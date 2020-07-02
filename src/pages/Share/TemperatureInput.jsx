import React from 'react';

const scales = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default class TemperatureInput extends React.Component
{
    constructor(props){
        super(props);
    }

    handleChange(scale, e){
        this.props.onTemperatureChange({scale, temperature: e.target.value});
    }

    render(){

        const temperature = this.props.temperature;
        const scale = this.props.scale;

console.log( typeof temperature );

        return(
            <fieldset>
                <legend>Enter Temperature in {scales[scale]}</legend>
                <input type="number" 
                    onChange={this.handleChange.bind(this, scale)} 
                    value={temperature}
                />
            </fieldset>
        );
    }
}