import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div className='slider'>
                <input
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    value={this.state.value}
                    step={this.props.step}
                    onChange={this.handleChange.bind(this)}
                    className="slider__input"
                />
                <div className="slider__value">
                    {this.state.value}
                </div>
            </div>
        );
    }
}

export default Slider;