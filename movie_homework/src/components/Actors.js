import React from "react";

export const Actors = (props) => {
    return(
        <div className="actors">
            <h2>
                {props.stars.actor1}
            </h2>

            <h2>
                {props.stars.actor2}
            </h2>
            
            <h2>
                {props.stars.actor3}
            </h2>
        </div>
    )
}