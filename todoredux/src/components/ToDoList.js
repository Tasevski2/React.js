import React from "react";

export class ToDoList extends React.Component {
    render() {
        return(
            <div className="to-do-list">
                <ol>
                   {
                       this.props.to_do_list.map((to_do, i) => {
                           return(
                               <li key={i}>
                                    <h2>{to_do}</h2>
                               </li>
                           )
                       })
                   }
                </ol>
            </div>
        )
    }
}