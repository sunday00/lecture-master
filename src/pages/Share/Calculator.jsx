import React from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

export default class Calculator extends React.Component
{
    constructor(props){
        super(props);
        this.state={ temperature: 0, scale: 'c' }
    }

    handleChange({scale, temperature}, e){
        this.setState({scale, temperature});
    }

    toCelsius(fahrenheit){
        return ( fahrenheit -32 ) * 5 / 9;
    }

    toFahrenheit(celsius){
        return (celsius * 9 / 5) + 32;
    }

    tryConvert(temperature, toScaleFunction){
        return (Math.round(toScaleFunction(temperature) * 1000) / 1000).toString();
    }

    render(){

        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === "f" ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === "c" ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput scale="c" 
                    temperature={celsius}
                    onTemperatureChange={this.handleChange.bind(this)} />
                <TemperatureInput scale="f" 
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange.bind(this)} />
                <BoilingVerdict celsius={celsius} />
            </div>
        );
    }
}