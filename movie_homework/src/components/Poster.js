import React from "react";

export const Poster = (props) => {
    return(
        <figure>
            <img 
                src={props.picture.url} 
                alt={props.picture.movie_name}
                width="200"        
              />
        </figure>
    )
}
