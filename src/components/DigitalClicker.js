import React, {Component} from 'react'

class DigitalClicker extends Component{

    constructor(){
        super()
        this.state = {
            timesClicked : 0
        }
    }

    incrementClicker = (event) => {
        const newTime = this.state.timesClicked + 1
        this.setState({
            timesClicked: newTime
        })
    }

    render(){
        return(
        <div>
        <label>Click me!</label>
        <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
        </div>
        )
    }
}

export default DigitalClicker

