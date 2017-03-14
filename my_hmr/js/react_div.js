import React, {PropTypes} from "react";

export default function Div(props) {
    return <div><h1>{props.value}</h1></div>;
}

Div.propTypes = {
    value: PropTypes.string.isRequired
};