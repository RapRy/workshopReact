import React from 'react';
import MediaControl from './MediaControl';

import { CSSTransition } from 'react-transition-group';

class Preview extends React.Component{
	constructor(props){
		super(props);
		this.dir = "https://s3-ap-southeast-1.amazonaws.com/qcnt/";
		this.imgExt = ".png"
		this.audioTag = `${this.dir}content/${this.props.data[0].filename}.${this.props.data[0].fileExtension}`
		this.state = {
			timeStamp: "00:00",
            progressVal: 0
		}
	}

	setThumbnail = () => {
		const prevThumbIMGVDO = {width: "60%"}

		const { catName } = this.props;
		const { filename, fileExtension } = this.props.data[0];

		switch(catName){
			case "Apps":
			case "Games-apk":
				return <img src={`${this.dir}content/${filename+this.imgExt}`} style={prevThumbIMGVDO} />
			case "VIDEOS":
				return (
					<video preload="metadata" style={prevThumbIMGVDO} id="videoFile" onTimeUpdate={this.updateProgress.bind(this, "videoFile")}>
						<source src={`${this.dir}content/${filename}.${fileExtension}`} type="video/mp4" />
					</video>
				)
			case "Tones":
				return <img src={`${this.dir}content/672f065d-0ee5-41f4-85b3-eb7efdb0ddb9${this.imgExt}`} style={prevThumbIMGVDO} />
			default:
				return <img src={`${this.dir}content/${filename+this.imgExt}`} style={prevThumbIMGVDO} />
		}
	}

	updateProgress(mediaId){
		const mediaFile = document.getElementById(mediaId);

		let mins = Math.floor(mediaFile.currentTime / 60);
		if(mins < 10) mins = "0"+String(mins)
		let secs = Math.floor(mediaFile.currentTime % 60)
		if(secs < 10) secs = "0"+String(secs)

		this.setState({
			progressVal: (mediaFile.currentTime / mediaFile.duration) * 100,
			timeStamp: `${mins}:${secs}`
		})
	}

	render(){
		
		const previewWrapper = {padding: "20px"}

		const prevThumb = {
			textAlign: "center",
			paddingBottom: "20px"
		}

		const prevPaddingBottom = {paddingBottom: "20px"}

		const prevNameH3 = {
			fontSize: "1rem",
			textAlign: "center",
			fontFamily: "'Quantico', sans-serif",
			fontWeight: "700",
			color: "rgba(46, 27, 59, 1)"
		}

		const prevCta = {textAlign:"center"}

		const prevCtaA = {
			display: "inline-block",
			textAlign: "center",
			fontFamily: "'Quantico', sans-serif",
			fontWeight: "700",
			padding: "10px 30px",
			backgroundColor: "rgba(211, 69, 87, 1)",
			borderRadius: "5px",
			color: "#f6f6f6",
			fontSize: "1rem"
		}

		const prevDescP = {
			color: "rgba(46, 27, 59, 1)",
			fontSize: ".8rem",
			lineHeight: "1.6",
			textAlign: "center",
			fontFamily: "'Roboto', sans-serif"
		}

		const { catName } = this.props;

		return(
			<CSSTransition in={true} timeout={800} classNames="show" enter={true} exit={true}>
				
				<section className="previewWrapper" style={previewWrapper}>
					<div className="preview">
						<div className="prevThumb" style={prevThumb}>
							{this.setThumbnail()}
							{(catName == "Tones" || catName == "VIDEOS") ? 
								<MediaControl 
									mediaId={(catName == "VIDEOS") ? "videoFile" : "audioFile"}
									audioTag={(catName == "Tones") ? this.audioTag : null} vidProgress={(catName == "VIDEOS") ? this.state.progressVal : null}
									vidTimeStamp={(catName == "VIDEOS") ? this.state.timeStamp : ""} updateProgress={this.updateProgress}
								/> : null}
						</div>
						<div className="prevNameCta" style={prevPaddingBottom}>
							<div className="prevName" style={prevPaddingBottom}>
								<h3 style={prevNameH3}>{this.props.data[0].title}</h3>
							</div>
							<div className="prevCta" style={prevCta}>
								<a href={`${this.dir}content/${this.props.data[0].filename}.${this.props.data[0].fileExtension}`} style={prevCtaA}>Download</a>
							</div>
						</div>
						<div className="prevDesc" style={prevPaddingBottom}>
							<p style={prevDescP}>{this.props.data[0].description}</p>
						</div>
					</div>
				</section>

			</CSSTransition>
		)
	}
}

export default Preview;