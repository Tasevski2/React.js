import React from "react";
import { Table } from "./Table";


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = [{
            firstName: "",
            lastName: "",
            email: "",
            // confirm: true,
            tData: []
        }];

        this.handleChange = this.handleChange.bind(this);
        this.addToTable = this.addToTable.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    addToTable = (event) => {
        event.preventDefault();

        this.setState({
            tData: [
                ...this.state.tData,
                this.state.firstName,
                this.state.lastName,
                this.state.email
            ],
            firstName: "",
            lastName: "",
            email: ""
        });
    };



    render() {
        return(
            <div>
                
                <Table 
                data={this.state.tData}
                />

                <form onSubmit={this.addToTable}>
                    <p>
                        <input onChange={this.handleChange} type="text" placeholder="First Name" value={this.state.firstName} name="firstName" />
                    </p>

                    <p>
                        <input onChange={this.handleChange} type="text" placeholder="Last Name" value={this.state.lastName} name="lastName"/>
                    </p>
                    
                    <p>
                        <input onChange={this.handleChange} type="email" placeholder="email"
                        value={this.state.email} name="email"/>
                    </p>
                    
                    <p>
                        <button type="submit">Add</button>
                    </p>
            </form>
            {console.log(this.state.tData)}
            

            </div>
        )
    }
}