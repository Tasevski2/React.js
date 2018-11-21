import React from "react";
import { connect } from "react-redux";

import { ToDoField } from "./ToDoField";
import { ToDoList } from "./ToDoList";
import { fetchUsers} from "../actions/UserAction";

import { addToDo, removeToDo } from "../actions/ToDoAction";
import { Welcome } from "./Welcome";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            to_do: "",
            to_do_list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

    componentDidMount() {
        this.props.zemiKorisnici();
    }
    handleChange(event) {
        this.setState({
            to_do: event.target.value
            
        })
    };

    addToDo(to_do, event) {
        event.preventDefault();
        if(this.state.to_do !== "")
        {
            this.props.addToDo(to_do);
            this.setState({
            to_do: ""
            });
        }
    }

    render() {
        return(
            <div>
                <div className="centered-content">
                    <Welcome 
                    name="Viktor"
                    age={23}
                    />
                    <ToDoField 
                    handleChange={this.handleChange}
                    to_do={this.state.to_do}
                    addToDo={(event) => this.addToDo(this.state.to_do, event)}
                    />
                    <br/>
                    <ToDoList 
                    to_do_list={this.props.to_do_list}
                    removeToDo={(to_do) => this.props.removeToDo(to_do)}
                    />
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
        addToDo: (to_do) => {
            dispatch(addToDo(to_do));
        },
        removeToDo: (to_do) => {
            dispatch(removeToDo(to_do));
        },
        zemiKorisnici: () => {
            dispatch(fetchUsers())
        }   
    }
}



App = connect(mapStateToProps , mapDispatchToProps)(App);
// http://builtin.co/pc-gaming-ergonomics/