import React from "react";
import { Header } from "./Header";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Users } from "./Users";
import { UserDetails } from "./UserDetails";

export class App extends React.Component {
    render() {
        return(
            <div id="pop">
                <Header />

                <Route exact path="/" component={ Home }/>
                <Route path="/about" component={ About }/>
                <Route path="/contact" component={ Contact }/>
                <Route exact path="/users" component={ Users }/>
                <Route path="/users/:id" component={ UserDetails }/>


            </div>
        )
    }
}