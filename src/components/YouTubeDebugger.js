// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{

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

    changeBitrate = () => {
        let obj = this.state.settings
        obj.bitrate = 12
        this.setState({settings: obj})
    }

    changeRes = () => {
        let obj = this.state.settings
        obj.video.resolution = '720p'
        this.setState({settings: obj})
    }
    render(){   
        return( 
            <div>
                <button className="bitrate" onClick={this.changeBitrate}></button>
                <button className="resolution"onClick={this.changeRes}></button>
            </div>
        )
    }


}