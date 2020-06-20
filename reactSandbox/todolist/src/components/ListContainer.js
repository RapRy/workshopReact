import React from 'react';
import UnfinishedTodo from './UnfinishedTodo';
import FinishedTodo from './FinishedTodo';

class ListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            checkItem: "",
            uncheckItem: "",
            todos: props.todos,
            testTodos: []
        }
    }

    checkTodo = (e) => {
        const itemTask = e.currentTarget.parentElement.nextElementSibling.firstElementChild.innerText;

        this.setState({checkItem: itemTask});
        this.setState({todos: [itemTask]})
    }
    
    render(){
        return(
            <section className="listContainer" id="listContainer">
                <div className="unfinishedContainer todoContainer">
                    <h4>Todos</h4>
                    <div className="unfinishedList">
                        {this.props.todos.map((item, key) => {
                            return <UnfinishedTodo item={item} key={key} checkTodo={this.checkTodo}/>
                        })}
                    </div>
                </div>
                <div className="finishedContainer todoContainer">
                    <h4>Finished Todos</h4>
                    <div className="finishedList">

                    </div>
                </div>
            </section>
        )
    }
}

export default ListContainer;