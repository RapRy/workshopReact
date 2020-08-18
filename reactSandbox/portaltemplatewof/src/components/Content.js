import React from 'react';
import Contents from './Contents';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Content({ subCatName, contents, hideContents, showPreview, catName }){

	const contentWrapStyle = {
		columnCount: "3",
		columnGap: "10px",
		padding: "20px"
	}

	return(
		// <section className="contentWrapper" style={contentWrapStyle}>
			<TransitionGroup className="contentWrapper" style={contentWrapStyle} component={'section'} >
				{contents.map((item, id) => {
					return (
						<CSSTransition key={id} timeout={800} classNames="show" appear={true} enter={true} exit={true} >
							<Contents data={item} key={id} showPreview={showPreview} hideContents={hideContents} catName={catName}/>
						</CSSTransition>
					)
				})}
			</TransitionGroup>
		// </section>
	)
}

export default Content;