import React from "react";
import { connect } from "react-redux";
import { fetchUser, Cv } from "../actions/UserAction";

export class App extends React.Component {
    
    componentDidMount() {
        this.props.zemiMe();
        this.props.zemiCv();
    }
    
    render() {
        return(
            <div>
                <h2>Hello {this.props.user.name}</h2>
                <h2>My name is {this.props.cv.name} I'm {this.props.cv.age} and my email is {this.props.cv.email}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.userReducer.user,
        cv: state.userReducer.cv
    }
}

const mapdispatchToProps = (dispatch) => {
    return {
        zemiMe: () => {
            dispatch(fetchUser());
        },
        zemiCv: () => {
            dispatch(Cv());
        }
    }
}


App = connect(mapStateToProps,mapdispatchToProps)(App);