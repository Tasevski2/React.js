import React from "react";


export const UsersTable = (props) => {
        return(
            <div className="users-table" >
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Role</th>
                            <th>Lastname</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            props.users.length !== 0
                            
                            ?

                            props.users.map((user) => {
                                return (
                                    <tr key={user._id}>
                                    <td>{user.firstname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.lastname}</td>
                                    <td><button onClick={() => props.deleteUser(user._id)}>-</button></td>
                                </tr>
                                )   
                            })

                            :

                            null

                        }
                    </tbody>
                </table>
        </div>
    )
}
