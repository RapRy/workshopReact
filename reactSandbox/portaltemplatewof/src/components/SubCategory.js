import React from 'react';
import SubCategories from './SubCategories';

function SubCategory({ subCategories, getContents}){
	const subCatStyle = {
		backgroundColor: "rgba(48, 31, 101, 1)",
		textAlign: "center",
		padding: "5px 0",
		zIndex: "0"
	}

	return(
		<section className="subCategory" style={subCatStyle}>
			<ul>
				{subCategories.map((item, id) => {
					return <SubCategories data={item} key={id} getContents={getContents}/>
				})}
			</ul>
		</section>
	)
}

// class SubCategory extends React.Component{
// 	constructor(props){
// 		super(props)
// 	}

// 	render(){
// 		const subCatStyle = {
// 			backgroundColor: "rgba(48, 31, 101, 1)",
// 			textAlign: "center",
// 			padding: "5px 0",
// 			zIndex: "0"
// 		}

// 		const { getContents, subCategories } = this.props;

// 		console.log(subCategories[0].catId)

// 		return(
// 			<section className="subCategory" style={subCatStyle}>
// 				<ul>
// 				{subCategories.map((item, id) => {
// 					return <SubCategories data={item} key={id} getContents={getContents}/>
// 				})}
// 				</ul>
// 			</section>
// 		)
// 	}
// }

export default SubCategory;