// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component{

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }
     addCount = () => {
         let count = this.state.timesClicked
         count++
         this.setState({timesClicked: count})
     }

    render(){
    return <button onClick={this.addCount}>{this.state.timesClicked}</button>

    }
}