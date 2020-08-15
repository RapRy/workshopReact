import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faPause } from '@fortawesome/free-solid-svg-icons'

class MediaControl extends React.Component{
    render(){
        return(
            <div className="controls">
                <button className="btn" id="play">
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                <button className="btn" id="stop">
                    <FontAwesomeIcon icon={faStop} />
                </button>
                <input type="range" id="progress" className="progress" min="0" max="100" step="0.1" value="0" />
                <span className="timestamp" id="timestamp">00:00</span>
            </div>
        )
    }
}

export default MediaControl;