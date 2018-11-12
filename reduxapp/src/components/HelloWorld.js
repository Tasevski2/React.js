import React from "react";

export class HelloWorld extends React.Component {
    render() {
        return(
            <div>
                <h2>We are learning {this.props.technology}</h2>
                <h2>My name is {this.props.user.firstName} {this.props.user.lastName} and I am {this.props.user.age}</h2>
                
            </div>
        )
    }
}