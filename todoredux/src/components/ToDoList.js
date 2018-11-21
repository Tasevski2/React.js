import React from "react";

export class ToDoList extends React.Component {
    render() {
        return(
            <div className="to-do-list">
                <ol>
                   {
                       this.props.to_do_list.length !== 0

                       ?

                           this.props.to_do_list.map((to_do, i) => {
                               return(
                                   <li key={i}>
                                        <span>{to_do}</span>
                                        <button onClick={() => this.props.removeToDo(to_do)} type="button">X</button>
                                   </li>
                               )
                        })
                   
                        :


                        <span>List is empty</span>
                    }
                </ol>
            </div>
        )
    }
}