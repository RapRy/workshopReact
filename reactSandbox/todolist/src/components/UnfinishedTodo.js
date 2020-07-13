import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

class UnfinishedTodo extends React.Component{
    state = {
        month: "",
        day: "",
        year: "",
        hour: "",
        minutes: "",
        meridian: ""
    }
    // remove check icon
    componentWillUnmount(){
        const todos = document.querySelectorAll('.todo');
        todos.forEach((todo) => {
            todo.firstElementChild.firstElementChild.checked = false;
        })
    }
    // get the month name
    convertMonthToString(month){
        switch(month){
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                return month 
        }
    }
    // convert hour to 12 hour format
    convertHour(hour){
        switch(hour){
            case 13:
                return 1
            case 14:
                return 2
            case 15:
                return 3
            case 16:
                return 4
            case 17:
                return 5
            case 18:
                return 6
            case 19:
                return 7
            case 20:
                return 8
            case 21:
                return 9
            case 22:
                return 10
            case 23:
                return 11
            case 0:
                return 12
            default:
                return hour
        }
    }
    // get AM or PM
    getMeridian(hour){
        if(hour >= 12){
            return "PM";
        }else{
            return "AM"
        }
    }
    // assign the date values to the state properties
    componentDidMount(){
        // destructure dateTime
        let { month, day, year, hour, minutes } = this.props.item.dateTime;
        // meridian return value
        let meridian = this.getMeridian(hour);
        // month return value
        month = this.convertMonthToString(month);
        // hour return value
        hour = this.convertHour(hour);
        // assign values to the state
        this.setState({
            month: month,
            day: day,
            year: year,
            hour: hour,
            minutes: minutes,
            meridian: meridian
        })
    }

    render(){
        return(
            <div className="todo">
                <div className="todoCheckbox">
                    <input 
                        type="checkbox" 
                        className="checkboxTodo" 
                        // eventlistener
                        onChange={this.props.checkTodo.bind(this, this.props.item.todoId, this.props.item.todo, this.props.item.dateTime)}
                    />
                    <span className="spanCheckbox"></span>
                </div>
                <div className="todoDesc">
                    <p>{this.props.item.todo}</p>
                    <div className="todoDate">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>added on {this.state.month} {this.state.day}, {this.state.year} at {this.state.hour}:{this.state.minutes} {this.state.meridian}</span>
                    </div>
                </div>
                <button 
                    type="button" 
                    name="delete" 
                    className="deleteItem" 
                    // eventlistener
                    onClick={this.props.removeTodo.bind(this, this.props.item.todoId)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                    <span>Delete</span>
                </button>
            </div>
        )
    }
}

export default UnfinishedTodo;