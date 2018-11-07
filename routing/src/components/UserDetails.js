import React from "react";

export class UserDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        }

        this.fetchUser = this.fetchUser.bind(this);
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser() {
        fetch("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.id)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                user: data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    };

    render() {
        return(
            <div className="user-detail">
                {
                    this.state.user !== null
                    
                    ?
                        
                        <div>
                            <h2>{this.state.user.name}</h2><br/>
                            <span>{this.state.user.username}</span><br/>
                            <a href={"mailot: " + this.state.user.email}>{this.state.user.email}</a><br/>
                            <a href={this.state.user.website}>{this.state.user.website}</a><br/>
                            <span>She works for:</span>
                            <h2>{this.state.user.company.name}</h2><br/>
                            <span>She live in:</span>
                            <h2>{this.state.user.address.street}, {this.state.user.address.suite} in {this.state.user.address.city}</h2>
                        </div>

                    :

                    null

                }
            </div>
        )
    }
}