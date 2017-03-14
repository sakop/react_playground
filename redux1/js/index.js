import {createStore, combineReducers, applyMiddleware} from "redux";
import {render} from "react-dom";
import React, {Component} from "react";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
// import * as reducers from "./reducers";
let reducers = require("./reducers");
import Counter from "./components/counter";
import Timer from "./components/timer";


// let updateTimerAction = ()=> {
//     return (dispatch, getState)=> {
//         let payload = {then: getState().timer.now};
//
//         dispatch({
//             type:"FETCHING"
//         });
//
//         fetch("http://localhost:8082/date")
//             .then((response)=> response.json())
//             .then((json)=> {
//                 payload.now = json.now;
//                 var k = 0;
//                 for (var i = 0; i < 10000; i++) {
//                     k = k + i;
//                 }
//                 dispatch({
//                     type: "UPDATE_TIME",
//                     payload: payload
//                 })
//             })
//     };
// };

let updateTimerAction = (dispatch, getState)=> {
    let payload = {then: getState().timer.now};
    dispatch({type: "FETCHING"});
    return fetch("http://localhost:8082/date")
        .then((response)=> response.json())
        .then((json)=> {
            payload.now = json.now;
            return {
                type: "UPDATE_TIME",
                payload: payload
            }
        });

};

// console.log(123)
// const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const store = createStore(combineReducers(reducers), applyMiddleware(promiseMiddleware));

const {dispatch, getState} = store;

function onIncrement() {
    store.dispatch({type: "INCR"});
}

function onDecrement() {
    store.dispatch({type: "DECR"});
}

let interval = null;
class AsyncComponent extends Component {
    componentDidMount() {
        interval = setInterval(()=> {
            // store.dispatch(updateTimerAction());
            dispatch(updateTimerAction(dispatch, getState));
        }, 2000);

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

function update() {
    render(<AsyncComponent>
        <Counter value={store.getState().counter.count} onIncrement={onIncrement}
                 onDecrement={onDecrement}/>
        <Timer now={store.getState().timer.now} then={store.getState().timer.then}/>

    </AsyncComponent>, document.getElementById("react"));
}
console.log(123);
update();
store.subscribe(update);

if (module.hot) {
    module.hot.dispose(function () {
        clearInterval(interval);
    });
    module.hot.accept();
}
