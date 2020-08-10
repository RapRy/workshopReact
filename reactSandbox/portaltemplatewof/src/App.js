import React from 'react';
import logo from './assets/logo.png';

import axios from 'axios';

import './style.css';

import MainCategory from './components/MainCategory';
import SubCategories from './components/SubCategories';

class App extends React.Component{
	state = {
		subCategories: ""
	}

	getSubCats = (e) => {
		const dataMainCat = e.currentTarget.parentElement.getAttribute('data-main-cat');
		const dataForm = new FormData;
		dataForm.append('cat', dataMainCat);

		axios({
			method: 'post',
    		url: "http://localhost/_ry/workshopReact/workshopReact/reactSandbox/portaltemplatewof/php/subcategories.php",
    		headers: {'content-type':'application/x-www-form-urlencoded'},
    		data: dataForm
		})
			.then(res => this.setState({subCategories: res.data}));
	}

	render(){
		let renderSubCat = [];
		if(this.state.subCategories != ""){
			this.state.subCategories.map((item, id) => {
				renderSubCat.push(<SubCategories data={item} key={id}/>);
			})
		}
		return(
			<React.Fragment>
				<header className="header">
					<img src={logo} alt="Powerland" />
				</header>
				<MainCategory getSubCats={this.getSubCats}/>
				<section className="subCategory">
					<ul data-main-category={(this.state.subCategories === "") ? "Games-apk" : this.state.subCategories[0].category}>
						{renderSubCat.map((item, id) => item)}
					</ul>
				</section>
			</React.Fragment>
		)
	}
}

export default App;