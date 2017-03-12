try {
    require("webpack-hot-middleware/client");
} catch (e) {
}
require("./div");
var React = require("react");
var ReactDom = require("react-dom");

import add from "./math";
console.log(add(1, 10));

import Div from "./react_div";
ReactDom.render(<Div/>, document.getElementById("react"));


if (module.hot) {
    module.hot.accept();
}