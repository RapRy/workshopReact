import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons'

class MediaControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon: faPlay,
            timeStamp: "00:00",
            progressVal: 0
        }
    }

    playPauseVideo(mediaId){
        const mediaFile = document.getElementById(mediaId);
        if(this.state.icon == faPlay){
            this.setState({icon: faPause});
            mediaFile.play();
        }else{
            this.setState({icon: faPlay});
            mediaFile.pause();
        }
    }

    stopVideo(mediaId){
        const mediaFile = document.getElementById(mediaId);
        mediaFile.currentTime = 0;
        mediaFile.pause();

        this.setState({icon: faPlay})
    }

    render(){
        const controls = {
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }

        const btn = {
            fontSize: "1.2rem",
            border: "0",
            background: "transparent",
            cursor: "pointer",
            paddingRight: "5px"
        }

        const btnPlay = { color: "rgba(48, 31, 101, 1)" }
        const btnStop = { color: "rgba(255, 100, 100, 1)" }

        const progress = {
            appearance:"none",
            width:"100%",
            background:"transparent",
            marginRight:"5px"
        }

        const timestamp = {
            color: "rgba(48, 31, 101, 1)",
            fontSize: ".9rem",
            fontFamily: "'Roboto', sans-serif"
        }

        return(
            <div className="controls" style={controls}>
                {(this.props.mediaId == "audioFile") ? <audio id={this.props.mediaId} onTimeUpdate={this.props.updateProgress.bind(this, this.props.mediaId)}><source src={this.props.audioTag} type="audio/mpeg" /></audio> : ""}
                <button className="btn" id="play" style={{...btn, ...btnPlay}} onClick={this.playPauseVideo.bind(this, this.props.mediaId)}>
                    <FontAwesomeIcon icon={this.state.icon} />
                </button>
                <button className="btn" id="stop" style={{...btn, ...btnStop}} onClick={this.stopVideo.bind(this, this.props.mediaId)}>
                    <FontAwesomeIcon icon={faStop} />
                </button>
                <input type="range" id="progress" className="progress" min="0" max="100" step="0.1" value={(this.props.mediaId == "videoFile") ? this.props.vidProgress : this.state.progressVal} style={progress} />
                <span className="timestamp" id="timestamp" style={timestamp}>{(this.props.mediaId == "videoFile") ? this.props.vidTimeStamp : this.state.timeStamp}</span>
            </div>
        )
    }
}

export default MediaControl;