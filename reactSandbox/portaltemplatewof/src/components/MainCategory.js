import React from 'react';

class MainCategory extends React.Component{
	componentDidMount(){
		const mainCatLink = document.querySelectorAll('.mainCategory ul li a');

		mainCatLink[0].style.color = "rgba(248, 245, 130, 1)";

		// this.props.getSubCats(dataMainCat[0].getAttribute('data-main-cat'));
	}

	setSubCategories = (e) => {
		const dataMainCat = e.currentTarget.parentElement.getAttribute('data-main-cat');
		const lis = document.querySelectorAll('.mainCategory ul li');
		const catActive =  document.querySelector('.catActive');

		this.props.hideContents();
		
		this.props.getSubCats(dataMainCat);

		let ind = [...lis].indexOf(e.currentTarget.parentElement);

		catActive.style.left = `${e.currentTarget.parentElement.offsetWidth * ind}px`;

		lis.forEach((li) => {
			if(li.firstElementChild != null){
				li.firstElementChild.style.color = "#f6f6f6";
			}
		})

		e.currentTarget.style.color = "rgba(248, 245, 130, 1)";

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

		const catActive = {
			width:"25%",
			height:"33px",
			borderRadius: "5px 5px 0 0",
			backgroundColor: "rgba(48, 31, 101, 1)",
			position:"absolute",
			top:"0",
			left:"0",
			zIndex:"0",
			transition: "left 600ms ease-in-out"
		}

		return(
			<section className="mainCategory" style={mainCatStyle}>
				<ul style={ulStyle}>
					<li data-main-cat="Games-apk" style={liStyle}><a href="#" onClick={this.setSubCategories} style={aStyle}>Games</a></li>
					<li data-main-cat="VIDEOS" style={liStyle}><a href="#" onClick={this.setSubCategories} style={aStyle}>Videos</a></li>
					<li data-main-cat="Tones" style={liStyle}><a href="#" onClick={this.setSubCategories} style={aStyle}>Tones</a></li>
					<li data-main-cat="Apps" style={liStyle}><a href="#" onClick={this.setSubCategories} style={aStyle}>Apps</a></li>
					<li className="catActive" style={catActive}></li>
				</ul>
			</section>
		)
	}
}

export default MainCategory;