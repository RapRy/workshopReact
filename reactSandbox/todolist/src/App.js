import React from 'react';
// import axios from 'axios';
import './style.css';

import Instructions from './components/Instructions';
import AddInput from './components/AddInput';
import UnfinishedTodo from './components/UnfinishedTodo';
import FinishedTodo from './components/FinishedTodo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component{
    state = {
        inputValue: "",
        errorMsg: "",
        todos: [],
        doneTodos: []
    }

    getInputValue = () => {
        const addItemInput = document.getElementById('addItemInput');
        if(addItemInput.value === "" || addItemInput.value === null){
            this.setState({errorMsg: "Field is empty!"})
        }else if(addItemInput.value.length > 50){
            this.setState({errorMsg: "Must be atleast 50 characters only!"})
        }else{
            this.setState({
                inputValue: addItemInput.value, 
                errorMsg: ""
            })

            this.state.todos.push(addItemInput.value);

            addItemInput.value = "";
        }
    }

    testError = () => {
        if(this.state.errorMsg !== ""){
            return( <div className="errorMsg">
                        <p className="error">
                            {<FontAwesomeIcon icon={faExclamationCircle} />}
                            <span>{this.state.errorMsg}</span>
                        </p>
                    </div>)
        }
    }

    removeTodo = (item) => {
        const newTodo = this.state.todos.filter((todo, i) => todo != item);
        this.setState({todos:newTodo})
    }

    checkTodo = (item) => {
        const newTodo = this.state.todos.filter((todo, i) => todo != item);
        this.setState({todos:newTodo});
        this.state.doneTodos.push(item);
    }

    undoDoneTodo = (item) => {
        const newDoneTodo = this.state.todos.filter((todo, i) => todo != item);
        this.setState({doneTodos:newDoneTodo});
        this.state.todos.push(item);
    }

    render(){
        return(
            <main className="mainContainer">
                <section className="createContainer">
                    <div className="addListContainer">
                        <Instructions />
                        <AddInput getValue={this.getInputValue}/>
                    </div>
                    {this.testError()}
                </section>
                <section className="listContainer" id="listContainer">
                    <div className="unfinishedContainer todoContainer">
                        <h4>Todos</h4>
                        <div className="unfinishedList">
                            {this.state.todos.map((item, id) => {
                                return (
                                    <UnfinishedTodo 
                                        item={item}
                                        key={id} 
                                        removeTodo={this.removeTodo}
                                        checkTodo={this.checkTodo}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="finishedContainer todoContainer">
                        <h4>Finished Todos</h4>
                        <div className="finishedList">
                            {this.state.doneTodos.map((item, id) => {
                                return (
                                    <FinishedTodo
                                        item={item}
                                        key={id}
                                        undoDoneTodo={this.undoDoneTodo}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;