import React from 'react';
import SubCategories from './SubCategories';

import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';

class SubCategory extends React.Component{

	render(){
		return(
			<Transition in={true} timeout={400} appear>
				{state => (
					<section className={`subCategory slide slide-${state}`}>
						<ul data-main-category="sad">
							{this.props.subCategories.map((item, id) => {
								return <SubCategories data={item} key={id} getContents={this.props.getContents}/>
							})}
						</ul>
					</section>
				)}
			</Transition>
		)
	}
}

export default SubCategory;