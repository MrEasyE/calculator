import React, { Component } from 'react';

class Display extends Component {
    

    render(){
        return(
            <div className="calcDisplay">
                <div className="calcDisplayHistory">{this.props.history}</div>
                <div className="calcDisplayCurrent">{this.props.current}</div>
            </div>
        )
    }
}

export default Display;