import React from "react";

export class Users extends React.Component {
    render() {
        return(
            <div className="users-list">
                {
                    this.props.data.filter(user => {return user.address.street === "Hoeger Mall"}).map((user) => {
                        return(
                            <div key={user.id}>
                                <h2>{user.name}</h2>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

