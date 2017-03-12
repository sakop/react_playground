import $ from "jquery";

if (Math.random() > 0.5) {
    require.ensure([], ()=> {
        console.log($);
    }, "button2");
}