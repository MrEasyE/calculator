import React, { Component } from 'react';
import './App.css';

// Custom Components

import Display from './components/display';
import Button from './components/button';


class App extends Component {
  
  state = {
    history: 0,
    action: null,
    display: null,
    value1: null,
    value2: null,
    isDecimal: false
  }

  onClickButton(e){
    console.log(e.buttonValue)
  }

  includeNumber(num){

    // checking if button is decminal and return out if we've already got one decimal.
    if(num.buttonValue === '.'){
      if(this.state.isDecimal){
        return
      } else {
        this.setState({
          isDecimal: true
        })
      }
    }

    // adding the num.buttonValue to the value1 string.
    let current = this.state.value1 ? this.state.value1 : "";

    // check if current is supposed to be a 0 (because the first character is a decimal)

    if(num.buttonValue === "." && current === ""){
      current = "0";
    }

    const newNum = num.buttonValue;
    const newString = `${current}${newNum}`;

    // check if we have a value right now.
    if(this.state.value) {
      this.setState({
        value1: newString
      }, () => {
        this.setState({display: this.state.value1})
      })
    } else {
      // just set the value, do not copy current value.
      this.setState({
        value1: newString
      }, () => {
        this.setState({display: this.state.value1})
      })
    }
    

  }

  opFunc(op){
    this.setState({
      action: op.buttonValue,
      value2: Number(this.state.value1),
      value1: null
    }, () => {
      let newString = this.state.value2 + " " + this.state.action;
      this.setState({
        history: newString,
        display: null
      })
    })
  }

  equalsFunc(){
    const action = this.state.action ? this.state.action : null;
    if(action){
      if(action === "+"){
        let result = Number(this.state.value2) + Number(this.state.value1);
        this.setState({
          history: `${this.state.value2} + ${this.state.value1} = ${result}`
        }, () => {
          this.clearFunc(false)
        })
      } else if (action === "-"){
        let result = Number(this.state.value2) - Number(this.state.value1);
        this.setState({
          history: `${this.state.value2} + ${this.state.value1} = ${result}`
        }, () => {
          this.clearFunc(false)
        })
      } else if (action === "*"){
        let result = Number(this.state.value2) * Number(this.state.value1);
        this.setState({
          history: `${this.state.value2} * ${this.state.value1} = ${result}`
        }, () => {
          this.clearFunc(false)
        })
      } else if (action === "/"){
        let result = Number(this.state.value2) / Number(this.state.value1);
        this.setState({
          history: `${this.state.value2} / ${this.state.value1} = ${result}`
        }, () => {
          this.clearFunc(false)
        })
      } else {
        return;
      }
    }
  }

  clearFunc(all){
    console.log('Clear')
    if(!all) {
      this.setState({
        value1: null,
        value2: null,
        isDecimal: false,
        display: null
      })
    } else {
      this.setState({
        value1: null,
        value2: null,
        isDecimal: false,
        display: null,
        history: null
      })
    }
    
  }

  // list of our buttons and their attributes
  buttons = [
    ['CE', "clear", true],
    ['/', "divide", true],
    ['*',"multiply", true],
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
      let sendFunc = () => {
        if(button[1] === 'clear'){
          return this.clearFunc.bind(this);
        } else if (button[1] === "add" || button[1] === "subtract" || button[1] === "multiply" || button[1] === "divide") { // the operations function
          return this.opFunc.bind(this);
        } else if (button[1] === "equals") {
          return this.equalsFunc.bind(this);
        } else {
          return this.includeNumber.bind(this);
        }
      }
    return <Button key={index} id={button[1]} buttonClass={buttonClass} button={button[0]} func={sendFunc()}/>
    })

    return (

      <div className="App">
        <div className="calcBody">

          <Display display={this.state.display} history={this.state.history}/>
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
