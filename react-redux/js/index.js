import {createStore, combineReducers, applyMiddleware} from "redux";
import {render} from "react-dom";
import React, {Component} from "react";
import thunk from "redux-thunk";
import * as reducers from "./reducers";
import {Provider} from "react-redux";
import Counter from "./components/counter";
import Timer from "./components/timer";

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));


render(
    <Provider store={store}>
       <div>
           <Counter/>
           <Timer/>
       </div>
    </Provider>, document.getElementById("react"));

if (module.hot) {
    module.hot.accept();
}
