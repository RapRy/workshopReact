import React from 'react';

class SubCategories extends React.Component{
	render(){
		return(
			<li>
				<a href="#">{this.props.data.subCategory}</a>
				<input type="hidden" name="catId" value={this.props.data.catId} />
				<input type="hidden" name="subCatId" value={this.props.data.subId} />
			</li>
		)
	}
}

export default SubCategories;