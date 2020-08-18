import React from 'react';
import SubCategories from './SubCategories';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

function SubCategory({ subCategories, getContents, hideContents}){
	const subCatStyle = {
		backgroundColor: "rgba(48, 31, 101, 1)",
		textAlign: "center",
		padding: "5px 0",
		zIndex: "0",
	}

	return(
		<TransitionGroup>
			<CSSTransition key={subCategories[0].catId} timeout={500} classNames="slide" enter={true} exit={true}>
				<section className="subCategory" style={subCatStyle}>
				<ul>
					{subCategories.map((item, id) => {
						return <SubCategories data={item} key={id} getContents={getContents} hideContents={hideContents}/>
					})}
				</ul>
				</section>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default SubCategory;