import React from 'react';

class SubCategories extends React.Component{
	
	componentDidMount(){
		// const subCat = document.querySelectorAll('.subCategory ul li a');
		// const catId = subCat[0].nextElementSibling.value;
		// const subCatId = subCat[0].nextElementSibling.nextElementSibling.value

		// this.props.getContents(catId, subCatId)
	}

	setContent = (e) => {
		e.preventDefault();
		const catId = e.currentTarget.nextElementSibling.value;
		const subCatId = e.currentTarget.nextElementSibling.nextElementSibling.value;
		const subCatName = e.currentTarget.innerText;
		this.props.getContents(catId, subCatId, subCatName)
	}

	render(){
		return(
			<li>
				<a href="#" onClick={this.setContent}>{this.props.data.subCategory}</a>
				<input type="hidden" name="catId" value={this.props.data.catId} />
				<input type="hidden" name="subCatId" value={this.props.data.subId} />
			</li>
		)
	}
}

export default SubCategories;