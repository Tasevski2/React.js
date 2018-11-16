import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/IncDecAction";

export class App extends React.Component {

    

    render() {
        console.log(this.props);
        return(
            <div>
                <button onClick={this.props.zgolemi.bind(this)}>+1</button>
                <span>{this.props.inc_dec}</span>
                <button onClick={this.props.namali.bind(this)}>-1</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        inc_dec: state.incDecReducer.count
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        zgolemi: () => {
            dispatch(increment());
        },
        namali: () => {
            dispatch(decrement());
        }
    }
}


App = connect(mapStateToProps, mapDispatchToProps)(App);