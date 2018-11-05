import React from "react";

export class Table extends React.Component{
    render() {
        return(
            <table>

                <tbody>
                    <tr>
                        <th>
                            Name
                        </th>

                        <th>
                            LastName
                        </th>

                        <th>
                            E-mail
                        </th>
                    </tr> 
                
                {
                this.props.data.map((rdata,i) => {
                       return( 
                             <tr>
                                <td>
                                    <p>{this.props.rdata.firstName}</p>
                                </td>

                                <td>
                                    {this.props.rdata.lastName}
                                </td>

                                <td>
                                    {this.props.rdata.email}
                                </td>
                            </tr>
                        ) 
                    })
                }
               </tbody>
            </table>
        )
    }
}