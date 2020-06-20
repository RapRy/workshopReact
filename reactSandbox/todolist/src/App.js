import React from 'react';
// import axios from 'axios';
import './style.css';

import Instructions from './components/Instructions';
import AddInput from './components/AddInput';
import ListContainer from './components/ListContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component{
    state = {
        inputValue: "",
        errorMsg: "",
        todos: []
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
                <ListContainer todos={this.state.todos}/>
            </main>
        )
    }
}

export default App;