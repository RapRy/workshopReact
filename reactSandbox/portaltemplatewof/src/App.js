import React from 'react';
import logo from './assets/logo.png';

import axios from 'axios';

import './style.css';

import MainCategory from './components/MainCategory';
import SubCategories from './components/SubCategories';
import Content from './components/Content';
import Preview from './components/Preview';

class App extends React.Component{
	state = {
		subCategories: "",
		contents: "",
		previewContent: ""
	}

	hideContents = () => {
		this.setState({contents: ""});
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
				const subCatId = subCat[0].nextElementSibling.nextElementSibling.value

				this.getContents(catId, subCatId)

			});
	}

	getContents = (catId, subCatId) => {

		const dataForm = new FormData;
		dataForm.append('catId', catId);
		dataForm.append('subCatId', subCatId);

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

				this.setState({contents: res.data})
			});
	}

	render(){
		let renderSubCat = [];
		let renderContent = [];
		if(this.state.subCategories != ""){
			this.state.subCategories.map((item, id) => {
				renderSubCat.push(<SubCategories data={item} key={id} getContents={this.getContents}/>);
			})
		}

		if(this.state.contents != ""){
			this.state.contents.map((item, id) => {
				renderContent.push(<Content data={item} key={id} showPreview={this.showPreview} hideContents={this.hideContents}/>)
			})
		}

		return(
			<React.Fragment>
				<header className="header">
					<img src={logo} alt="Powerland" />
				</header>
				<MainCategory getSubCats={this.getSubCats} />
				<section className="subCategory">
					<ul data-main-category={(this.state.subCategories === "") ? "Games-apk" : this.state.subCategories[0].category}>
						{renderSubCat.map((item, id) => item)}
					</ul>
				</section>
				<main className="mainContainer">
					<section className="contentWrapper">
						{renderContent.map((item, id) => item)}
					</section>
					{(this.state.previewContent != "")? <Preview data={this.state.previewContent}/> : ""}
				</main>
			</React.Fragment>
		)
	}
}

export default App;