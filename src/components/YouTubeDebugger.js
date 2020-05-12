// Code YouTubeDebugger Component Here
import React, {Component} from "react"
import ReactDOM from "react-dom"

export default class YouTubeDebugger extends Component {
    constructor(){
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                     }
                    }
            }
    }

    handleClick = () => {
        console.log(this)
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionButton = () => {
        console.log(this)
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: "720p"
                }
            }
        })
    }

    render(){
        return (
            <div>
            <button className="bitrate" onClick={this.handleClick}>Change Bitrate</button>
            <button className="resolution" onClick={this.handleResolutionButton}>Change Resolution</button>
            </div>
        )
    }



}