import React from "react";
import ReactDom from "react-dom";


class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.props.onChange(e);
    }

    render() {
        return (
            <fieldset>
                <lengend>
                    {this.props.type == 'F' ? "Fahrenheit" : "Celsius"}
                    <input value={this.props.value} onChange={this.onChange.bind(this)}/>
                </lengend>
            </fieldset>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0.0,
            unit: 'C'
        };
    }

    handleCelsius(e) {
        this.setState({
            value: e.target.value,
            unit: 'C'
        });
    }

    handleFahrenheit(e) {
        this.setState({
            value: e.target.value,
            unit: 'F'
        });
    }


    render() {
        let fahrenheitValue = null;
        let celsiusValue = null;
        const value = this.state.value;
        if (this.state.unit == "F") {
            fahrenheitValue = value;
            celsiusValue = toCelsius(value);
        } else {
            celsiusValue = value;
            fahrenheitValue = toFahrenheit(value);
        }

        return (
            <div>
                <TemperatureInput type="F" value={fahrenheitValue} onChange={this.handleFahrenheit.bind(this)}/>
                <TemperatureInput type="C" value={celsiusValue} onChange={this.handleCelsius.bind(this)}/>
                <div>{celsiusValue >= 100 ? 'Water boils' : 'Water does not boil'}</div>
            </div>
        )
    }

}


ReactDom.render(<Calculator/>, document.body);
