import React from 'react';

class ListContainer extends React.Component {
    render(){
        return(
            <section className="listContainer" id="listContainer">
                <div className="unfinishedContainer todoContainer">

                </div>
                <div className="finishedContainer todoContainer">
                    
                </div>
            </section>
        )
    }
}

export default ListContainer;