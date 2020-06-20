import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons'

class FinishedTodo extends React.Component{
    render(){
        return(
            <div className="doneTodo">
                <div className="doneTodoDesc">
                    <p>insert something here</p>
                </div>
                <button type="button" name="undo" className="undoItem">
                    <FontAwesomeIcon icon={faUndo} />
                    <span>Undo</span>
                </button>
            </div>
        )
    }
}

export default FinishedTodo;