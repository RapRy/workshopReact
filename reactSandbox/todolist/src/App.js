import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './style.css';

import Instructions from './components/Instructions';
import AddInput from './components/AddInput';
import UnfinishedTodo from './components/UnfinishedTodo';
import FinishedTodo from './components/FinishedTodo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class App extends React.Component{
    state = {
        inputValue: "",
        errorMsg: "",
        todos: [],
        doneTodos: []
    }
    // create new todo
    getInputValue = () => {
        const addItemInput = document.getElementById('addItemInput');
        // check input value
        if(addItemInput.value === "" || addItemInput.value === null){
            // if input value is empty show error message
            this.setState({errorMsg: "Field is empty!"})
        }else if(addItemInput.value.length > 50){
            // if input value characters are greater than 50 show error message
            this.setState({errorMsg: "Must be atleast 50 characters only!"})
        }else{
            // if input value has no error assign the value into the state
            this.setState({
                inputValue: addItemInput.value, 
                errorMsg: ""
            })

            let isDate = new Date();
            let month = isDate.getMonth();
            let day = isDate.getDate();
            let year = isDate.getFullYear();
            let hour = isDate.getHours();
            let minutes = isDate.getMinutes();

            // push new js objecton 
            this.state.todos.push({
                todoId: uuidv4(),
                todo: addItemInput.value,
                dateTime: {
                    month: month,
                    day: day,
                    year: year,
                    hour: hour,
                    minutes: minutes
                }
            });
            // empty input on success
            addItemInput.value = "";
        }
    }
    // jsx for the error message
    showError = () => {
        if(this.state.errorMsg !== ""){
            return( <div className="errorMsg">
                        <p className="error">
                            {<FontAwesomeIcon icon={faExclamationCircle} />}
                            <span>{this.state.errorMsg}</span>
                        </p>
                    </div>)
        }
    }
    // remove selected todo in the todos array
    removeTodo = (itemId) => {
        const newTodo = this.state.todos.filter((todo, i) => todo.todoId !== itemId);
        this.setState({todos:newTodo})
    }
    // remove selected todo in the todos array then insert into the doneTodos array 
    checkTodo = (itemId, item, itemAddedDateTime) => {
        const newTodo = this.state.todos.filter((todo, i) => todo.todoId !== itemId);
        this.setState({todos:newTodo});
        let isDate = new Date();
        let month = isDate.getMonth();
        let day = isDate.getDate();
        let year = isDate.getFullYear();
        let hour = isDate.getHours();
        let minutes = isDate.getMinutes();
        this.state.doneTodos.push({
            todoId: itemId,
            todo:item,
            dateTime: {
                month: month,
                day: day,
                year: year,
                hour: hour,
                minutes: minutes
            },
            addedDateTime: itemAddedDateTime
        });
    }
    // remove todo from doneTodos array then send it back to todos array
    undoDoneTodo = (itemId, item, addedDateTime) => {
        const newDoneTodo = this.state.doneTodos.filter((todo, i) => todo.todoId !== itemId);
        this.setState({doneTodos:newDoneTodo});
        this.state.todos.push({
            todoId: itemId,
            todo: item,
            dateTime: addedDateTime
        });
    }

    render(){
        return(
            <main className="mainContainer">
                <section className="createContainer">
                    <div className="addListContainer">
                        <Instructions />
                        <AddInput getValue={this.getInputValue}/>
                    </div>
                    {this.showError()}
                </section>
                <section className="listContainer" id="listContainer">
                    <div className="unfinishedContainer todoContainer">
                        <h4>Todos</h4>
                        <div className="unfinishedList">
                            <TransitionGroup>
                                {this.state.todos.map((item, id) => {
                                    return (
                                        <CSSTransition
                                            key={id}
                                            timeout={200}
                                            classNames="trans"
                                        >
                                            <UnfinishedTodo 
                                                key={id}
                                                item={item}
                                                removeTodo={this.removeTodo}
                                                checkTodo={this.checkTodo}
                                            />
                                        </CSSTransition>
                                    )
                                })}
                            </TransitionGroup>
                        </div>
                    </div>
                    <div className="finishedContainer todoContainer">
                        <h4>Finished Todos</h4>
                        <div className="finishedList">
                            <TransitionGroup>
                                {this.state.doneTodos.map((item, id) => {
                                    return (
                                        <CSSTransition
                                            key={id}
                                            timeout={200}
                                            classNames="trans"
                                        >
                                            <FinishedTodo
                                                item={item}
                                                key={id}
                                                undoDoneTodo={this.undoDoneTodo}
                                            />
                                        </CSSTransition>
                                    )
                                })}
                            </TransitionGroup>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;