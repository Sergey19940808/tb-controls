import React, { Component } from 'react';
import './App.css';
import Slider from "../Controls/Slider";
import Range from "../Controls/Range";
import GradientPicker from "../Controls/GradientPicker";

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Slider
                    value={5}
                    min={0}
                    max={10}
                    step={1}
                />
                <Range
                    minValue={0}
                    maxValue={10}
                    min={0}
                    max={10}
                    step={1}
                />
                <GradientPicker />
            </div>
    );
  }
}

export default App;
