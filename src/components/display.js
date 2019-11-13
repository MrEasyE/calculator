import React, { Component } from 'react';

class Display extends Component {


    render(){
        
        return(
            <div className="calcDisplay">
                <div className="calcDisplayHistory">{this.props.history}</div>
                {this.props.display ? <div className="calcDisplayCurrent">{this.props.display}</div> : <div className="calcDisplayCurrent">0</div>}
            </div>
        )
    }
}

export default Display;