import React from "react";
import blog from "../assets/images/rp1.jpg"

import { Poster } from "./Poster";
import { Info } from "./Info";
import { Actors } from "./Actors";

export class Movie extends React.Component {
    render() {

        let movie_info = {
            movie_name: "Ready player one",
            description: "Action, Adventure, Sci-Fi - When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune.",
            rating: "*****",
        }

        let poster = {
            movie_name: "Ready play one",
            url: blog
        }
        
        let actors = {
            actor1: "Tye Sheridan",
            actor2: "Olivia Cooke",
            actor3: "Ben Mendelsohn"
        }

        return(
            <div>
                <Poster 
                    picture={poster}
                />

                <Info 
                    movie_data={movie_info}
                />
                <hr/>
                <Actors 
                    stars={actors}
                />
            </div>
        )
    }
}