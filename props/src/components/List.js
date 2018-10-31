import React from "react";

export class List extends React.Component {
    render() {
        return(
            <div>
                {/* <ul>   Basic List
                    {
                        this.props.movie_data.map((movie, i) => {
                            return(
                                <li key={i}>
                                    <h2>{movie.}</h2>
                                </li>
                            )
                        })
                    }
                </ul> */}
                
                {/* Array of objects */}
                
                 <ul>   Basic Lift
                    {
                        this.props.compMovies.map((movie, i) => {
                            return(
                                <li key={i}>
                                    <h2>{movie.title}</h2>
                                    <span>{movie.year}</span>
                                    <hr/>
                                </li>
                            )
                        })
                    }
                </ul> 

            </div>
        )
    }
}