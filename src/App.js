import React, { Component } from 'react';
import './App.css';

// Custom Components

import Display from './components/display';
import Button from './components/button';


class App extends Component {
  
  state = {
    history: 0,
    display: null,
    action: 'addition',
    value1: 0,
    value2: null
  }

  onClickButton(e){
    console.log(e.buttonValue)
  }

  includeNumber(num){
    this.setState({
      value1: Number(num.buttonValue + `${this.state.value1}`),
    })
  }

  // list of our buttons and their attributes
  buttons = [
    ['CE', "clear", true],
    ['/', "divide", true],
    ['X',"multiply", true],
    ['7', "seven", false ],
    ['8',"eight", false ],
    ['9', "nine", false ],
    ['-', "subtract", true],
    ['4', "four", false],
    ['5', "five", false ],
    ['6', "six", false],
    ['+', "add", true],
    ['1', "one", false],
    ['2', "two", false],
    ['3', "three", false],
    ['=', "equals", true],
    ['0',"zero", false],
    ['.', "decimal", false]
  ]

  render(){

    // create buttons based on properties in buttons array
    let buttons = this.buttons.map((button, index) => {
      let buttonClass = `calcButtons ${button[2] ? "calcButtonFunctions" : null}`;
    return <Button key={index} id={button[1]} buttonClass={buttonClass} button={button[0]} func={this.includeNumber.bind(this)}/>
    })

    return (

      <div className="App">
        <div className="calcBody">

          <Display current={this.state.display} history={this.state.history}/>
          {/* publish the buttons */}
          <div className="buttonContainer">
            {buttons}
          </div>
        </div>
      </div>
    );

  }
}

export default App;
