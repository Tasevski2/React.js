import React from "react";
import PropTypes from "prop-types";

export const Welcome = (props) => {
    return (
        <div>
            <h2>
                {props.name} welcome to your todo app.
            </h2>
        </div>
    )
}

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}