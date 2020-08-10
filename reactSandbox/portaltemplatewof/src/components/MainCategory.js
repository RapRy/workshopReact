import React from 'react';

class MainCategory extends React.Component{
	render(){
		return(
			<section className="mainCategory">
				<ul>
					<li data-main-cat="Games-apk"><a href="#" onClick={this.props.getSubCats}>Games</a></li>
					<li data-main-cat="VIDEOS"><a href="#" onClick={this.props.getSubCats}>Videos</a></li>
					<li data-main-cat="Tones"><a href="#" onClick={this.props.getSubCats}>Tones</a></li>
					<li data-main-cat="Apps"><a href="#" onClick={this.props.getSubCats}>Apps</a></li>
				</ul>
			</section>
		)
	}
}

export default MainCategory;