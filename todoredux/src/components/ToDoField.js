import React from "react";

export class ToDoField extends React.Component {
    render() {
        return(
            <div className="to-do-field">
                <form onSubmit={this.props.addToDo}>
                    <input type="text" onChange={this.props.handleChange} placeholder="TO DO" value={this.props.to_do}></input>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}