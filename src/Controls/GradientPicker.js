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
                        <option>aliceblue</option>
                        <option>antiquewhite</option>
                        <option>aqua</option>
                        <option>aquamarine</option>
                        <option>azure</option>
                        <option>beige</option>
                        <option>bisque</option>
                        <option>black</option>
                        <option>blanche­dalmond</option>
                        <option>blue</option>
                        <option>blueviolet</option>
                        <option>brown</option>
                        <option>burlywood</option>
                        <option>cadetblue</option>
                        <option>chartreuse</option>
                        <option>chocolate</option>
                        <option>coral</option>
                        <option>corn­flowerblue</option>
                        <option>cornsilk</option>
                        <option>crimson</option>
                        <option>cyan</option>
                        <option>darkblue</option>
                        <option>darkcyan</option>
                        <option>dark­goldenrod</option>
                        <option>darkgray</option>
                        <option>darkgreen</option>
                        <option>darkkhaki</option>
                        <option>darkmagenta</option>
                        <option>darkolivegreen</option>
                        <option>darkorange</option>
                        <option>darkorchid</option>
                        <option>darkred</option>
                        <option>darksalmon</option>
                        <option>dark­seagreen</option>
                        <option>darkslate­blue</option>
                        <option>darkslate­gray</option>
                        <option>dark­turquoise</option>
                        <option>darkviolet</option>
                        <option>deeppink</option>
                        <option>deepsky­blue</option>
                        <option>dimgray</option>
                        <option>dodgerblue</option>
                        <option>firebrick</option>
                        <option>floral­white</option>
                        <option>forest­green</option>
                        <option>fuchsia</option>
                        <option>gainsboro</option>
                        <option>ghostwhite</option>
                        <option>gold</option>
                        <option>goldenrod</option>
                        <option>gray</option>
                        <option>green</option>
                        <option>green­yellow</option>
                        <option>honeydew</option>
                        <option>hotpink</option>
                        <option>indianred</option>
                        <option>indigo</option>
                        <option>ivory</option>
                        <option>khaki</option>
                        <option>lavender</option>
                        <option>lavender­blush</option>
                        <option>lawngreen</option>
                        <option>lemon­chiffon</option>
                        <option>lightblue</option>
                        <option>lightcoral</option>
                        <option>lightcyan</option>
                        <option>lightgolden­rodyellow</option>
                        <option>lightgray</option>
                        <option>lightgreen</option>
                        <option>lightpink</option>
                        <option>lightsalmon</option>
                        <option>light­seagreen</option>
                        <option>light­skyblue</option>
                        <option>light­slategray</option>
                        <option>lightsteel­blue</option>
                        <option>light­yellow</option>
                        <option>lime</option>
                        <option>limegreen</option>
                        <option>linen</option>
                        <option>magenta</option>
                        <option>maroon</option>
                        <option>mediumaqua­marine</option>
                        <option>mediumblue</option>
                        <option>medium­orchid</option>
                        <option>medium­purple</option>
                        <option>medium­seagreen</option>
                        <option>medium­slateblue</option>
                        <option>medium­springgreen</option>
                        <option>medium­turquoise</option>
                        <option>medium­violetred</option>
                        <option>midnightblue</option>
                        <option>mintcream</option>
                        <option>mistyrose</option>
                        <option>moccasin</option>
                        <option>navajo­white</option>
                        <option>navy</option>
                        <option>oldlace</option>
                        <option>olive</option>
                        <option>olivedrab</option>
                        <option>orange</option>
                        <option>orangered</option>
                        <option>orchid</option>
                        <option>pale­goldenrod</option>
                        <option>palegreen</option>
                        <option>pale­turquoise</option>
                        <option>pale­violetred</option>
                        <option>papayawhip</option>
                        <option>peachpuff</option>
                        <option>peru</option>
                        <option>pink</option>
                        <option>plum</option>
                        <option>powder­blue</option>
                        <option>purple</option>
                        <option>red</option>
                        <option>rosybrown</option>
                        <option>royalblue</option>
                        <option>saddle­brown</option>
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
                        <option>spring­green</option>
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
                        <option>yellow­green</option>
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