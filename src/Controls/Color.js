import React, { Component } from 'react';
import './Color.css';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    handleChangeName(e) {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <li className='gradient-picker__list-item'>
                <input value={this.state.name} type='text' onChange={this.handleChangeName.bind(this)} />
            </li>
        );
    }
}

export default Color;