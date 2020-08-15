import React from 'react';
import Contents from './Contents';

function Content({ subCatName, contents, hideContents, showPreview, catName }){

	const contentWrapStyle = {
		columnCount: "3",
		columnGap: "10px",
		padding: "20px"
	}

	return(
		<section className="contentWrapper" style={contentWrapStyle}>
			{contents.map((item, id) => {
				return <Contents data={item} key={id} showPreview={showPreview} hideContents={hideContents} catName={catName}/>
			})}
		</section>
	)
}

export default Content;