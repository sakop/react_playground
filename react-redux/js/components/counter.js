/**
 * Created by qiucheng on 17/3/13.
 */
import React, {Component, PropTypes} from "react";
import * as Actions from "../actions/counter";
import {connect} from "react-redux";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, increment, decrement, incrementIfOdd, incrementAsync} = this.props;
        return (
            <div>
                Clicked {value} times:
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={incrementIfOdd}>+ if odd</button>
                <button onClick={incrementAsync}>+ async-</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        value: state.counter.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: ()=> dispatch(Actions.onIncrement),
        decrement: ()=> dispatch(Actions.onDecrement),
        incrementIfOdd: ()=>dispatch(Actions.onIncrementIfOdd),
        incrementAsync: ()=> dispatch(Actions.onIncrementIfAsync())
    }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;