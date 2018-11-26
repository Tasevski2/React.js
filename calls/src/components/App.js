import React from "react";
import axios from "axios";

import { UsersCreator } from "./UsersCreator";
import { UsersTable } from "./UsersTable";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            user: {
                firstname: "",
                lastname: "",
                email: "",
                role: "",
                password: ""
            },
            users: []
        }

        this.handleUserOnChange = this.handleUserOnChange.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    handleUserOnChange(event) {
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        })
    }

    fetchUsers() {
        axios.get("http://localhost/users")
        .then((res) => {
            console.log(res);
            this.setState({
                users: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }

    deleteUser(userId) {
        axios.delete("http://localhost/delete/user/id/" + userId)
        .then((res) => {
                this.fetchUsers();
        }).catch((err) => {
            console.log(err);
        })
    }

    createUser(event) {
        event.preventDefault();
        axios({
            method: "post",
            url: "http://localhost/create/user/",
            data: this.state.user
        })
        .then((res) => {
            this.fetchUsers();
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {
        return(
            <div id="app-container">
                <UsersCreator 
                    user={this.state.user}
                    handleUserOnChange={this.handleUserOnChange}
                    users={this.state.users}
                    createUser={this.createUser}
                />
                <UsersTable
                    users={this.state.users}
                    deleteUser={this.deleteUser}
                />
            </div>
        )
    }
}