import React from 'react';

class Content extends React.Component{
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

	render(){
		return(
			<div className="content" onClick={this.setPreview}>
				<input type="hidden" value={this.props.data.contentId} />
				<div className="contentThumb">
					<img src={`${this.dir}content/${this.props.data.filename+this.imgExt}`} />
				</div>
				<div className="contentName">
					<p>{this.props.data.title}</p>
				</div>
				<div className="contentCta">
					<a href={`${this.dir}content/${this.props.data.filename}.${this.props.data.fileExtension}`}>Download</a>
				</div>
			</div>
		)
	}
}

export default Content;