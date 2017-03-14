// require("./div");
import React, {PropTypes, Component} from "react";
var ReactDom = require("react-dom");

import add from "./math";
console.log(add(1,112));

import Div from "./react_div";
ReactDom.render(<Div value="1123"/>, document.getElementById("react"));

//
// if (module.hot) {
//     module.hot.accept();
// }

class Button extends Component {

    render() {
        return (
            <button style={{color: this.context.color}} onClick={()=>{
                this.click();
            }}>
                {this.props.children}
            </button>
        )
    }
}


