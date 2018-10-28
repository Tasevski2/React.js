import React from "react";

import { Home } from "./Home";
import { Header } from "./Header";

export class App extends React.Component {
    render() {
        return(
            <div id="main_container">
                <Header />
                <Home />
            </div>
        )
    }
}