import React from "react";
import { connect } from "react-redux";

import { ToDoField } from "./ToDoField";
import { ToDoList } from "./ToDoList";


import { addToDo } from "../actions/ToDoAction";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            to_do: "",
            to_do_list: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            to_do: event.target.value
            
        })
    };

    render() {
        return(
            <div>
                <div className="centered-content">
                    <ToDoField 
                    handleChange={this.handleChange}
                    to_do={this.state.to_do}
                    addToDo={(event) => this.props.addToDo(this.state.to_do, event)}
                    />
                    <br/>
                    <ToDoList to_do_list={this.props.to_do_list}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        to_do_list: state.addToDoReducer.to_do_list
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (to_do, event) => {
            event.preventDefault();
            dispatch(addToDo(to_do));
        }
    }
}



App = connect(mapStateToProps , mapDispatchToProps)(App);