import React from 'react';

class SubCategories extends React.Component{
	componentDidMount(){
		const aTag = document.querySelectorAll('.subCategory ul li a');
		 
		aTag[0].style.color = "rgba(248, 245, 130, 1)";
	}

	setContent = (e) => {
		e.preventDefault();
		const catId = e.currentTarget.nextElementSibling.value;
		const subCatId = e.currentTarget.nextElementSibling.nextElementSibling.value;
		const subCatName = e.currentTarget.innerText;
		const aTag = document.querySelectorAll('.subCategory ul li a');
		// const catName = e.currentTarget.parentElement.parentElement.getAttribute('data-category')
		this.props.hideContents();
		this.props.getContents(catId, subCatId, subCatName)

		aTag.forEach((a) => a.style.color = "#f6f6f6");

		e.currentTarget.style.color = "rgba(248, 245, 130, 1)";

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