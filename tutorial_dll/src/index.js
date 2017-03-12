import $ from "jquery";
import "./tesr.scss";

if (!!document.querySelector("a")) {
    require.ensure(["./components/button"], ()=> {
        const Button = require("./components/button").default;
        var button = new Button("www.baidu.com");
        button.render($("a"));
    }, "button");
}

if ($("h1").length > 0) {
    require.ensure(["./components/header"], ()=> {
        const Header = require("./components/header").default
        var header = new Header();
        header.render($("h1"));
    }, "header");
}
