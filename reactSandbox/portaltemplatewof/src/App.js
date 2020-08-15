import React from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.png';

import axios from 'axios';

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
		subCat: "",
		cat: ""
	}

	componentDidMount(){
		const dataMainCat = document.querySelectorAll('.mainCategory ul li');
		this.getSubCats(dataMainCat[0].getAttribute('data-main-cat'))

		this.setState({cat: dataMainCat[0].getAttribute('data-main-cat')})
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

		console.log(dataMainCat)

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

				this.setState({subCategories: res.data, cat: dataMainCat})

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
		const headerStyle = {
			backgroundColor: "rgba(46, 27, 59, 1)",
			textAlign: "center",
			padding: "8px 0",
			position: "relative",
			zIndex: "1"
		}

		const mainContStyle = {
			maxWidth: "600px",
			height: "100%",
			margin: "0 auto"
		}

		return(
			<React.Fragment>
				<header className="header" style={headerStyle}>
					<img src={logo} alt="Powerland" />
				</header>
				<MainCategory getSubCats={this.getSubCats} />
				{(this.state.subCategories != "") ? <SubCategory subCategories={this.state.subCategories} getContents={this.getContents} /> : ""}
				<main className="mainContainer" style={mainContStyle}>
					{(this.state.subCat != "") ? <Content contents={this.state.contents} showPreview={this.showPreview} hideContents={this.hideContents} subCatName={this.state.subCat} catName={this.state.cat}/> : ""}

					{(this.state.previewContent != "") ? <Preview data={this.state.previewContent} catName={this.state.cat}/> : ""}
				</main>
			</React.Fragment>
		)
	}
}

export default App;