import React from "react";

export class Info extends React.Component {
    render() {
        return(
            <div id="movie-info">
                <div className="movie-name">
                    <span>
                        {this.props.movie_data.movie_name}
                    </span>
                </div>

                <div className="description">
                    <p>
                        {this.props.movie_data.description}
                    </p>
                </div>

                <div className="rating">
                    <span>
                        {this.props.movie_data.raing}
                    </span>
                </div>
            </div>
        )
    }
}