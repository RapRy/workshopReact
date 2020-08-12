import React from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.png';

import axios from 'axios';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';

import './style.css';

import MainCategory from './components/MainCategory';
import Content from './components/Content';
import Preview from './components/Preview';
import SubCategory from './components/SubCategory';

class App extends React.Component{
	state = {
		subCategories: [],
		contents: [],
		previewContent: "",
		subCat: ""
	}

	hideContents = () => {
		this.setState({contents: [], subCat: ""});
	}

	showPreview = (contentId) => {
		const dataForm = new FormData;
		dataForm.append('contentId', contentId);

		axios({
			method: 'post',
    		url: "http://localhost/_ry/workshopReact/workshopReact/reactSandbox/portaltemplatewof/php/preview.php",
    		headers: {'content-type':'application/x-www-form-urlencoded'},
    		data: dataForm
		})
			.then(res => this.setState({previewContent: res.data}));
	}

	getSubCats = (dataMainCat) => {
		const dataForm = new FormData;
		dataForm.append('cat', dataMainCat);

		axios({
			method: 'post',
    		url: "http://localhost/_ry/workshopReact/workshopReact/reactSandbox/portaltemplatewof/php/subcategories.php",
    		headers: {'content-type':'application/x-www-form-urlencoded'},
    		data: dataForm
		})
			.then(res => {
				if(this.state.previewContent != ""){
					this.setState({previewContent: ""})
				}

				this.setState({subCategories: res.data})

				const subCat = document.querySelectorAll('.subCategory ul li a');
				const catId = subCat[0].nextElementSibling.value;
				const subCatId = subCat[0].nextElementSibling.nextElementSibling.value;
				const subCatName = subCat[0].innerText;

				this.getContents(catId, subCatId, subCatName)

			});
	}

	getContents = (catId, subCatId, subCatName) => {

		const dataForm = new FormData;
		dataForm.append('catId', catId);
		dataForm.append('subCatId', subCatId);
		dataForm.append('subCatName', subCatName)

		axios({
			method: 'post',
			url: "http://localhost/_ry/workshopReact/workshopReact/reactSandbox/portaltemplatewof/php/contents.php",
			headers: {'content-type':'application/x-www-form-urlencoded'},
    		data: dataForm
		})
			.then(res => {
				if(this.state.previewContent != ""){
					this.setState({previewContent: ""})
				}

				this.setState({contents: res.data, subCat:res.data[0].subCatName})
			});
	}

	render(){
		return(
			<React.Fragment>
				<header className="header">
					<img src={logo} alt="Powerland" />
				</header>
				<MainCategory getSubCats={this.getSubCats} />
				<SubCategory subCategories={this.state.subCategories} getContents={this.getContents} />
				<main className="mainContainer">
					{(this.state.subCat != "") ? <Content contents={this.state.contents} showPreview={this.showPreview} hideContents={this.hideContents} subCatName={this.state.subCat}/> : ""}

					{(this.state.previewContent != "") ? <Preview data={this.state.previewContent}/> : ""}
				</main>
			</React.Fragment>
		)
	}
}

export default App;