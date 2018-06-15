import React, { Component } from 'react';
import './GradientPicker.css';

class GradientPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            args: [],
            colors: []
        }


    }

    componentWillMount(e) {
        this.setState({args: ['to top', 'black', 'yellow']})
    }

    handleSelectColor(e){

    }

    render() {
        return (


            <div className='gradient-picker'>
                <div className='gradient-picker__select-colors'>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                    </select>
                </div>
                <div className='gradient-picker__container'
                    style={{ background: `linear-gradient(${this.state.args})` }}
                     onClick={this.handleSelectColor.bind(this)}
                >
                </div>
                <div className='gradient-picker__checked'>
                    <div className='gradient-picker__title'>
                        Выберите угол наклона градиента
                    </div>
                    <label className='gradient-picker__item'>
                        <input type='radio' name='gradient-angle' value='to top' defaultChecked={true} />
                        <span className='gradient-picker__checkmark'></span>
                        Снизу вверх
                    </label>
                    <label className='gradient-picker__item'>
                        <input type='radio' name='gradient-angle' value='to left' />
                        <span className='gradient-picker__checkmark'></span>
                        Cправа налево
                    </label>
                    <label className='gradient-picker__item'>
                        <input type='radio' name='gradient-angle' value='to bottom' />
                        <span className='gradient-picker__checkmark'></span>
                        Сверху вниз
                    </label>
                    <label className='gradient-picker__item'>
                        <input type='radio' name='gradient-angle' value='to right' />
                        <span className='gradient-picker__checkmark'></span>
                        Слева направо
                    </label>
                </div>
            </div>


        );
    }
}

export default GradientPicker;