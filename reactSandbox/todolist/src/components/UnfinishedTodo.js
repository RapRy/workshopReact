import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class UnfinishedTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            checkTodoFn: props.checkTodo,
            testTodos: []
        }
    }

    render(){
        return(
            <div className="todo">
                <div className="todoCheckbox">
                    <input type="checkbox" className="checkboxTodo" onChange={this.state.checkTodoFn}/>
                    <span className="spanCheckbox"></span>
                </div>
                <div className="todoDesc">
                    <p>{this.state.item}</p>
                </div>
                <button type="button" name="delete" className="deleteItem">
                    <FontAwesomeIcon icon={faTimes} />
                    <span>Delete</span>
                </button>
            </div>
        )
    }
}

export default UnfinishedTodo;