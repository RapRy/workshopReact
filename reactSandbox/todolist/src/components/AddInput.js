import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class AddInput extends React.Component{

    render(){
        return(
            <form id="addForm">
                <input type="text" name="newItem" placeholder="New Item..." id="addItemInput"/>
                <button type="button" className="addItemBtn" id="addItemBtn" name="add" onClick={this.props.getValue} >
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add</span>
                </button>
            </form>
        )
    }
}

export default AddInput;