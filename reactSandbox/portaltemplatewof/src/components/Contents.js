import React from 'react';

import { CSSTransition } from 'react-transition-group';

class Contents extends React.Component{
	constructor(props){
		super(props);
		this.dir = "https://s3-ap-southeast-1.amazonaws.com/qcnt/";
		this.imgExt = ".png";
	}

	setPreview = (e) => {
		const contentId = e.currentTarget.firstElementChild.value;
		// const contentWrapper = document.querySelector('.contentWrapper');
		// contentWrapper.style.cssText = "display:none";
		this.props.hideContents();
		this.props.showPreview(contentId);
	}

	setThumbnail = () => {
		const { catName, data } = this.props
		const { filename, fileExtension } = data
		switch(catName){
			case "Apps":
			case "Games-apk":
				return <img src={`${this.dir}content/${filename+this.imgExt}`} />
			case "VIDEOS":
				return (
					<video preload="metadata">
						<source src={`${this.dir}content/${filename}.${fileExtension}#t=21`} type="video/mp4" />
					</video>
				)
			case "Tones":
				return <img src={`${this.dir}content/672f065d-0ee5-41f4-85b3-eb7efdb0ddb9${this.imgExt}`} />
			default:
				return <img src={`${this.dir}content/${filename+this.imgExt}`} />
		}
	}

	render(){
		const contentStyle = {
			padding: "10px",
			borderRadius: "5px",
			backgroundColor: "#fff",
			boxShadow: "3px 3px 10px rgba(0,0,0,.12)",
			marginBottom: "10px",
			WebkitColumnBreakInside: "avoid",
			pageBreakInside: "avoid",
			breakInside: "avoid",
			cursor: "pointer"
		}

		const contentThumb = {marginBottom: "5px"}

		const contentName = {marginBottom: "10px"}

		const contentNameP = {
			textAlign: "center",
			fontFamily: "'Roboto', sans-serif",
			fontSize: ".8rem",
			color: "rgba(46, 27, 59, 1)"
		}

		const contentCtaA = {
			display: "block",
			textAlign: "center",
			fontFamily: "'Quantico', sans-serif",
			fontWeight: "700",
			padding: "5px 0",
			width: "100%",
			backgroundColor: "rgba(211, 69, 87, 1)",
			borderRadius: "5px",
			color: "#f6f6f6",
			fontSize: ".75rem"
		}

		const { contentId, filename, fileExtension, title } = this.props.data

		return(
			// <CSSTransition in={true} timeout={2000} classNames="show" appear={true} enter={true} exit={true}>
			<div className="content" onClick={this.setPreview} style={contentStyle}>
				<input type="hidden" value={contentId} />
				<div className="contentThumb" style={contentThumb}>
					{this.setThumbnail()}
				</div>
				<div className="contentName" style={contentName}>
					<p style={contentNameP}>{title}</p>
				</div>
				<div className="contentCta">
					<a href={`${this.dir}content/${filename}.${fileExtension}`} style={contentCtaA}>Download</a>
				</div>
			</div>
			// </CSSTransition>
		)
	}
}

export default Contents;