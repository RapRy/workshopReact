import React from 'react';
import Contents from './Contents';

class Content extends React.Component{
	render(){
		return(
			<section className="contentWrapper" data-subCat={this.props.subCatName}>
				{this.props.contents.map((item, id) => {
					return <Contents data={item} key={id} showPreview={this.props.showPreview} hideContents={this.props.hideContents}/>
				})}
			</section>
		)
	}
}

export default Content;