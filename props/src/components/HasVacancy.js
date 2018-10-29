import React from "react";


export class HasVacancy extends React.Component {
    render() {
        return(
            <div className="has-vacancy">
                {
                    this.props.availability ? 
                    <h2>Hotel reservations are available</h2>
                    : 
                    <h2>Hotel reservations are not available</h2>
                }
            </div>
        )
    }
}