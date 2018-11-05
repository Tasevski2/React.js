import React from "react";

export class Input extends React.Component {
    render() {
        return(
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="email" />
                <input type="submit"/>

            </form>
        )
    }
}