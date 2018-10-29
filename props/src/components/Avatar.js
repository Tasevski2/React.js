import React  from "react";
export const Avatar = (props) => {
    return(
        <figure>
            <img 
                src={props.data.image_url} 
                alt={props.data.first_name} 
                width="100"
            />   
        </figure>
    )
        
}