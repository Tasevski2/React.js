import React from "react";
import { Welcome } from "./Welcome";
import { Comment } from "./Comment";
import avatar from "../assets/images/foto.jpg";
import { HasVacancy } from "./HasVacancy";
import { List } from "./List";

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

        let movies = [
            "Pulp Fiction",
            "The wild bunch",
            "Straw dogs",
            "Citizen Kane",
            "Annie Hall",
            "Legally Blonde"
        ]

        let compMovies = [
            {
                title: "Pulp Fiction",
                year: 1994
            },
            {
                title: "The Wild Bunch",
                year: 1969
            },
            {
                title: "Straw Dogs",
                year: 1974
            },
            {
                title: "Citizen Kane",
                year: 1940
            },
            {
                title: "Annie Hall",
                year: 1971
            },
            {
                title: "Legally Blonde",
                year: 2002
            }
        ];

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
                
                <List 
                    // movie_data={movies}
                    compMovies={compMovies}
                />
            </div>
        )
    }
}