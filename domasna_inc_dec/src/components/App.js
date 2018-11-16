import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/IncDecAction";

export class App extends React.Component {

    componentDidMount() {
        this.props.zgolemi();
        this.props.namali();
    }

    render() {
        return(
            <div>
                <button onClick={zgolemi}>+1</button>
                <span>{this.props.inc_dec.count}</span>
                <button onClick={namali}>-1</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        inc_dec: state.incDec.count
    }
}


const mapDispatchToProps = (dispatch) => {
    console.log(this.props)
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