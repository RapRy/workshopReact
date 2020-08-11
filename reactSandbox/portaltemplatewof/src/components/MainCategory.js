import React from 'react';

class MainCategory extends React.Component{
	componentDidMount(){
		const dataMainCat = document.querySelectorAll('.mainCategory ul li');

		this.props.getSubCats(dataMainCat[0].getAttribute('data-main-cat'));
	}

	setSubCategories = (e) => {
		const dataMainCat = e.currentTarget.parentElement.getAttribute('data-main-cat');
		this.props.getSubCats(dataMainCat);
	}

	render(){
		return(
			<section className="mainCategory">
				<ul>
					<li data-main-cat="Games-apk"><a href="#" onClick={this.setSubCategories}>Games</a></li>
					<li data-main-cat="VIDEOS"><a href="#" onClick={this.setSubCategories}>Videos</a></li>
					<li data-main-cat="Tones"><a href="#" onClick={this.setSubCategories}>Tones</a></li>
					<li data-main-cat="Apps"><a href="#" onClick={this.setSubCategories}>Apps</a></li>
				</ul>
			</section>
		)
	}
}

export default MainCategory;