import React from 'react';

class Preview extends React.Component{
	constructor(props){
		super(props);
		this.dir = "https://s3-ap-southeast-1.amazonaws.com/qcnt/";
		this.imgExt = ".png";
	}
	render(){
		return(
			<section className="previewWrapper">
				<div className="preview">
					<div className="prevThumb">
						<img src={`${this.dir}content/${this.props.data[0].filename+this.imgExt}`} />
					</div>
					<div className="prevNameCta">
						<div className="prevName">
							<h3>{this.props.data[0].title}</h3>
						</div>
						<div className="prevCta">
							<a href={`${this.dir}content/${this.props.data[0].filename}.${this.props.data[0].fileExtension}`}>Download</a>
						</div>
					</div>
					<div className="prevDesc">
						<p>{this.props.data[0].description}</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Preview;