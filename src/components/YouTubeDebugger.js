import React,  {Component} from 'react'

class YoutubeDebugger extends Component {

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
    changeBitrate = (event) => {
        this.setState({
            settings: {...this.state.settings, bitrate : 12}
        })
        console.log(this.state.settings.bitrate)
    }

    changeResolution = (event) => {
        this.setState({
            settings: {...this.state.settings, 
                video: {...this.state.settings.video, resolution: '720p'}
            }
        })
        console.log(this.state.settings.video.resolution)
    }
     
    render(){
        return(
            <div>
            <button className='bitrate' onClick={this.changeBitrate}>Change Bitrate</button>
            <br></br>
            <button className='resolution' onClick={this.changeResolution}>Change Resolution</button>
            </div>
        )
    }

}
export default YoutubeDebugger