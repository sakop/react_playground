import React,{Component} from "react";
import Action from "../actions/timer";
import {connect} from "react-redux";

class Timer extends Component {

    render() {
        const {then, now, update} = this.props;
        return (
            <div>Then is :{then}, Now is:{now}
                <button onClick={update}>update</button>
            </div>
        )
    }
}

const mapStatesToProps = (states)=> {
    return {
        then: states.timer.then,
        now: states.timer.now
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        update: ()=> dispatch(Action)
    }
};

let TimerContainer = connect(mapStatesToProps, mapDispatchToProps)(Timer);
export default TimerContainer;