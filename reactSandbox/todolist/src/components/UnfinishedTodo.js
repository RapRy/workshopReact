import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class UnfinishedTodo extends React.Component{
    componentWillUnmount(){
        const todos = document.querySelectorAll('.todo');
        todos.forEach((todo) => {
            todo.firstElementChild.firstElementChild.checked = false;
        })
    }

    render(){
        return(
            <div className="todo">
                <div className="todoCheckbox">
                    <input 
                        type="checkbox" 
                        className="checkboxTodo" 
                        onChange={this.props.checkTodo.bind(this, this.props.item)}
                    />
                    <span className="spanCheckbox"></span>
                </div>
                <div className="todoDesc">
                    <p>{this.props.item}</p>
                </div>
                <button 
                    type="button" 
                    name="delete" 
                    className="deleteItem" 
                    onClick={this.props.removeTodo.bind(this, this.props.item)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                    <span>Delete</span>
                </button>
            </div>
        )
    }
}

export default UnfinishedTodo;