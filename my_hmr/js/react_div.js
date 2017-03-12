import React from "react";

export default function Div(){
    var r = Math.random() * 1000 / 1000 + 2;
    return <div><h1>${r}</h1></div>;
}