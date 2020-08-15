import React from 'react';

class MainCategory extends React.Component{
	componentDidMount(){
		// const dataMainCat = document.querySelectorAll('.mainCategory ul li');

		// this.props.getSubCats(dataMainCat[0].getAttribute('data-main-cat'));
	}

	setSubCategories = (e) => {
		const dataMainCat = e.currentTarget.parentElement.getAttribute('data-main-cat');
		this.props.getSubCats(dataMainCat);
	}

	render(){
		const mainCatStyle = {
			backgroundColor: "rgba(46, 27, 59, 1)",
			textAlign: "center",
			width: "100%",
			overflowY: "hidden",
			position: "relative",
			zIndex: "1"
		}

		const ulStyle = {
			maxWidth: "320px",
			margin: "0 auto",
			position: "relative",
			zIndex: "1"
		}

		const liStyle = {
			display: "inline-block",
			width: "calc(100% / 4)",
			marginLeft: "-3px",
			position: "relative",
			zIndex: "1"
		}

		const aStyle = {
			color: "#f6f6f6",
			fontFamily: "'Quantico', sans-serif",
			fontSize: "1rem",
			display: "block",
			padding: "5px 0"
		}

		return(
			<section className="mainCategory" style={mainCatStyle}>
				<ul style={ulStyle}>
					<li data-main-cat="Games-apk" style={liStyle}><a href="#" onClick={this.setSubCategories} style={aStyle}>Games</a></li>
					<li data-main-cat="VIDEOS" style={liStyle}><a href="#" onClick={this.setSubCategories} style={aStyle}>Videos</a></li>
					<li data-main-cat="Tones" style={liStyle}><a href="#" onClick={this.setSubCategories} style={aStyle}>Tones</a></li>
					<li data-main-cat="Apps" style={liStyle}><a href="#" onClick={this.setSubCategories} style={aStyle}>Apps</a></li>
				</ul>
			</section>
		)
	}
}

export default MainCategory;