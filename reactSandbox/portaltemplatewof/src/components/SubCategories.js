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
		// const catName = e.currentTarget.parentElement.parentElement.getAttribute('data-category')
		this.props.getContents(catId, subCatId, subCatName)
	}

	render(){
		const liStyle = {
			display: "inline-block",
			padding: "5px 10px"
		}

		const aStyle = {
			color: "#f6f6f6",
			fontFamily: "'Quantico', sans-serif",
			fontSize: ".9rem",
			display: "inline-block",
			cursor: "pointer"
		}

		const { catId, subId } = this.props.data

		return(
			<li style={liStyle}>
				<a href="#" onClick={this.setContent} style={aStyle}>{this.props.data.subCategory}</a>
				<input type="hidden" name="catId" value={catId} />
				<input type="hidden" name="subCatId" value={subId} />
			</li>
		)
	}
}

export default SubCategories;