// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor(){
        super();
        this.state = {
            timesClicked: 0
        }
    }

    addOneClick = () => {
        let x = this.state.timesClicked+1
        this.setState({
            timesClicked: x
        })
    }




    render(){
    return <div><button onClick={this.addOneClick}>{this.state.timesClicked}</button></div>
    }
}