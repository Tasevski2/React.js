import React from "react";
import { NavLink } from "react-router-dom";
export const Home = (props) => {
    return(
        <div id="home">
            <div className="centered">
                <h2>Welcome { props.welcome }</h2>
                <NavLink to="/gallery">Check out the gallery!</NavLink>
            </div>
        </div>
    )
}