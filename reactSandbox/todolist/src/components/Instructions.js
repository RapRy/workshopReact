import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faUndo } from '@fortawesome/free-solid-svg-icons'

const Instructions = () => {
    return(
        <React.Fragment>
            <h1>Todo List</h1>
            <p>Enter text in the input field and click the {
                <span className="plusIcon">{
                    <FontAwesomeIcon icon={faPlus} />
                } Add</span>
            } to add items to your list.{<span className="maxChar">(max 50 characters)</span>}</p>
            <p>Click the {<span className="checkboxIcon"></span>} to mark the item as complete</p>
            <p>Click the {
                <span className="xIcon">{
                    <FontAwesomeIcon icon={faTimes} />
                } Delete</span>
            } button to remove the item from the list.</p>
            <p>Click the {
                <span className="undoIcon">{
                    <FontAwesomeIcon icon={faUndo}/>
                } Undo</span>
            } button to return back the finished item into the list.</p>
        </React.Fragment>
    )
}

export default Instructions;