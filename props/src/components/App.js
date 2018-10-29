import React from "react";
import { Welcome } from "./Welcome";
import { Comment } from "./Comment";
import avatar from "../assets/images/foto.jpg";
import { HasVacancy } from "./HasVacancy";

export class App extends React.Component {
    render() {
        let author = {
            first_name: "Viktor",
            last_name: "Tasevski",
            e_mail: "viktor@hotamil.com",
            image_url: avatar
        }

        let comment = {
            text: "This is a simple user comment",
            date: "10/09/2018"
        }
        return(
            <div>
                {/* <Welcome 
                name="Viktor Tasevski"
                email="viktor-tasevski@hotmail.com"/> */}
                {/* <Welcome user={user}/> */}

                <Comment 
                author={author}
                comment={comment}
                />
                <HasVacancy availability={true}s/>
            </div>
        )
    }
}