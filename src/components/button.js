import React, { Component } from 'react';

class Button extends Component {
    
    

    render(){

        const buttonValue = this.props.button
        
        return(
        <button id={this.props.id} className={this.props.buttonClass} onClick={(e) => this.props.func({buttonValue})}>{this.props.button}</button>
        )
    }
}

export default Button;