// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor(){
        super();
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

    updateBitrate = () => {
        console.log("updating bitrate", this.state.settings.bitrate)
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
        console.log("updating bitrate", this.state.bitrate)
    }

    updateResolution = () => {
        console.log("updating resolution", this.state.settings.video.resolution)
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution: '720p'
                }

            }
        })

        console.log("updating resolution", this.state.settings.video.resolution)
     
    }


    render(){
      return (
           <div>
            <button className="bitrate" onClick={this.updateBitrate}>bitrate</button>
            <button className="resolution" onClick={this.updateResolution}>resolution</button>
            </div>
            )
    
    }
}