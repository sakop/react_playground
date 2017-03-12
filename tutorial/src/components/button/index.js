import "./button.scss";
import $ from "jquery";
import template from "./button.html";
import Mustache from "mustache";

export default class Button {
    constructor(link) {
        this.link = link;
    }

    render(parent) {
        let text = $(parent).text();
        $(parent).html(Mustache.render(template, {text}));
        $(parent).click((e)=> {
            e.preventDefault();
            alert(this.link);
        });
    }
}