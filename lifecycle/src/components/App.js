import React from "react";
import { Welcome } from "./Welcome";
import { Users } from "./Users";
import { Clock } from "./Clock";

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showWelcome: true,
            users: []
        }

        console.log("Constructor");
        this.toggleHome = this.toggleHome.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    componentWillMount() {
        console.log("Components Will Mount");
    };

    componentDidMount() {
        console.log("Compostnet Did Moutn");
        this.fetchUsers();
    };

    componentWillReciveProps(nextProps) {
        console.log("Components will reacive props")

    };

    shouldComponentUpdate(nextProps,nextState) {
        console.log("Should component update", nextProps,nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Should component Update")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did ", prevProps, prevState)
    }

    toggleHome() {
        this.setState({
            showWelcome: !this.state.showWelcome
        })
    };

    fetchUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                users: data
            })
        })
        .catch((err) => {
            console.log("Error fetching data", err);
        })
    }

    render() {
        return(
            <div>
                {this.state.showWelcome ? <Welcome name="Viktor" /> : null}

                <button onClick={this.toggleHome}>(Un) mount components</button>

                <Users data={this.state.users} />

                <Clock />
            </div>
        )
    }
}