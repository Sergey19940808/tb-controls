import React, { Component } from 'react';
import './Range.css';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: this.props.minValue,
            maxValue: this.props.maxValue
        }
    }

    handleChangeMin(e) {
        this.setState({minValue: e.target.value})
    }

    handleChangeMax(e) {
        this.setState({maxValue: e.target.value})
    }

    render() {
        return (


        <div className='multi-range'>
            <hr className='multi-range__line' />
            <input
                type='range'
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                value={this.state.minValue}
                onChange={this.handleChangeMin.bind(this)}
                name='min'
                className="multi-range__input"
            />
            <input
                type='range'
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                value={this.state.maxValue}
                onChange={this.handleChangeMax.bind(this)}
                name='max'
                className="multi-range__input"
            />
            <div className="multi-range__value">
                {this.state.minValue}-{this.state.maxValue}
            </div>
        </div>


        );
    }
}

export default Range;