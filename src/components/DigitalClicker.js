// Code DigitalClicker Component Here
import React from "react"
import ReactDOM from "react-dom"

class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        console.log(this)
        this.setState(newState => ({
            timesClicked: newState.timesClicked + 1
        }))
    }

    render(){
        return (
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker