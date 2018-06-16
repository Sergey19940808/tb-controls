import React, { Component } from 'react';
import './GradientPicker.css';
import Color from "./Color";

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

    handleAddColor(e) {
        let isAdd;
        isAdd = this.state.colors.indexOf(e.target.value);

        if (isAdd === -1 && this.state.colors.length <= 6) this.setState({colors: this.state.colors.concat(e.target.value)});
        else if (isAdd === 0) return false;
    }

    handleSelectGradient() {
        this.setState({colors: []});
        let input = document.querySelector('input[type=radio]:checked').value;
        let arrArgs = [input];
        this.state.colors.map((i)=>{
            arrArgs.push(i)
        });
        this.setState({args: arrArgs});

    }



    render() {
        return (


            <div className='gradient-picker'>
                <div className='gradient-picker__select-colors'>
                    <select onChange={this.handleAddColor.bind(this)} multiple>
                        <option>aliceblue</option>
                        <option>antiquewhite</option>
                        <option>aqua</option>
                        <option>aquamarine</option>
                        <option>azure</option>
                        <option>beige</option>
                        <option>bisque</option>
                        <option>black</option>
                        <option>blanchedalmond</option>
                        <option>blue</option>
                        <option>blueviolet</option>
                        <option>brown</option>
                        <option>burlywood</option>
                        <option>cadetblue</option>
                        <option>chartreuse</option>
                        <option>chocolate</option>
                        <option>coral</option>
                        <option>cornflowerblue</option>
                        <option>cornsilk</option>
                        <option>crimson</option>
                        <option>cyan</option>
                        <option>darkblue</option>
                        <option>darkcyan</option>
                        <option>darkgoldenrod</option>
                        <option>darkgray</option>
                        <option>darkgreen</option>
                        <option>darkkhaki</option>
                        <option>darkmagenta</option>
                        <option>darkolivegreen</option>
                        <option>darkorange</option>
                        <option>darkorchid</option>
                        <option>darkred</option>
                        <option>darksalmon</option>
                        <option>darkseagreen</option>
                        <option>darkslateblue</option>
                        <option>darkslategray</option>
                        <option>darkturquoise</option>
                        <option>darkviolet</option>
                        <option>deeppink</option>
                        <option>deepskyblue</option>
                        <option>dimgray</option>
                        <option>dodgerblue</option>
                        <option>firebrick</option>
                        <option>floralwhite</option>
                        <option>forestgreen</option>
                        <option>fuchsia</option>
                        <option>gainsboro</option>
                        <option>ghostwhite</option>
                        <option>gold</option>
                        <option>goldenrod</option>
                        <option>gray</option>
                        <option>green</option>
                        <option>greenyellow</option>
                        <option>honeydew</option>
                        <option>hotpink</option>
                        <option>indianred</option>
                        <option>indigo</option>
                        <option>ivory</option>
                        <option>khaki</option>
                        <option>lavender</option>
                        <option>lavenderblush</option>
                        <option>lawngreen</option>
                        <option>lemonchiffon</option>
                        <option>lightblue</option>
                        <option>lightcoral</option>
                        <option>lightcyan</option>
                        <option>lightgoldenrodyellow</option>
                        <option>lightgray</option>
                        <option>lightgreen</option>
                        <option>lightpink</option>
                        <option>lightsalmon</option>
                        <option>lightseagreen</option>
                        <option>lightskyblue</option>
                        <option>lightslategray</option>
                        <option>lightsteelblue</option>
                        <option>lightyellow</option>
                        <option>lime</option>
                        <option>limegreen</option>
                        <option>linen</option>
                        <option>magenta</option>
                        <option>maroon</option>
                        <option>mediumaquamarine</option>
                        <option>mediumblue</option>
                        <option>mediumorchid</option>
                        <option>mediumpurple</option>
                        <option>mediumseagreen</option>
                        <option>mediumslateblue</option>
                        <option>mediumspringgreen</option>
                        <option>mediumturquoise</option>
                        <option>mediumvioletred</option>
                        <option>midnightblue</option>
                        <option>mintcream</option>
                        <option>mistyrose</option>
                        <option>moccasin</option>
                        <option>navajowhite</option>
                        <option>navy</option>
                        <option>oldlace</option>
                        <option>olive</option>
                        <option>olivedrab</option>
                        <option>orange</option>
                        <option>orangered</option>
                        <option>orchid</option>
                        <option>palegoldenrod</option>
                        <option>palegreen</option>
                        <option>paleturquoise</option>
                        <option>palevioletred</option>
                        <option>papayawhip</option>
                        <option>peachpuff</option>
                        <option>peru</option>
                        <option>pink</option>
                        <option>plum</option>
                        <option>powderblue</option>
                        <option>purple</option>
                        <option>red</option>
                        <option>rosybrown</option>
                        <option>royalblue</option>
                        <option>saddlebrown</option>
                        <option>salmon</option>
                        <option>sandybrown</option>
                        <option>seagreen</option>
                        <option>seashell</option>
                        <option>sienna</option>
                        <option>silver</option>
                        <option>skyblue</option>
                        <option>slateblue</option>
                        <option>slategray</option>
                        <option>snow</option>
                        <option>springgreen</option>
                        <option>steelblue</option>
                        <option>tan</option>
                        <option>teal</option>
                        <option>thistle</option>
                        <option>tomato</option>
                        <option>turquoise</option>
                        <option>violet</option>
                        <option>wheat</option>
                        <option>white</option>
                        <option>whitesmoke</option>
                        <option>yellow</option>
                        <option>yellowgreen</option>
                    </select>
                </div>
                <div className='gradient-picker__container'
                    style={{ background: `linear-gradient(${this.state.args})` }}
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
                <div className='gradient-picker__colors'>
                    <p className='gradient-picker__title'>
                        Добавьте минимум два цвета, максимум семь
                    </p>
                    <p className='gradient-picker__title'>
                        Введите % распределения для цвета
                    </p>
                    <div className='gradient-picker__list-colors'>
                        {
                            this.state.colors.length > 0 ?
                                this.state.colors.map((i)=>{
                                    return (
                                        <Color name={i} key={i} />
                                    )
                                }) : ""
                        }
                    </div>
                    <button disabled={this.state.colors.length >= 2 ? false : true}
                            className={this.state.colors.length >= 2 ?
                                'gradient-picker__button' :
                                'gradient-picker__button gradient-picker__button_disabled'
                            }
                            onClick={this.handleSelectGradient.bind(this)}
                    >
                        Показать
                    </button>
                </div>
            </div>


        );
    }
}

export default GradientPicker;