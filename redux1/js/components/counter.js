/**
 * Created by qiucheng on 17/3/13.
 */
import React, {Component, PropTypes} from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.onIncrementIfOdd = this.onIncrementIfOdd.bind(this);
        this.onIncrementAsync = this.onIncrementAsync.bind(this);
    }

    onIncrementIfOdd() {
        if (this.props.value % 2 == 1) {
            this.props.onIncrement();
        }
    }

    onIncrementAsync() {
        setTimeout(()=> {
            this.props.onIncrement();
        }, 500);
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                Clicked {value} times:
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.onIncrementIfOdd}>+ if odd</button>
                <button onClick={this.onIncrementAsync}>+ async-</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};