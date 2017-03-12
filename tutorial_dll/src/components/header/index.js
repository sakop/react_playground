import Mustache from "mustache";
import "./header.scss";
import template from "./header.html";
import $ from "jquery";

export default class Header {
    render(parent) {
        const text = $(parent).text();
        $(parent).html(
            Mustache.render(template, {text})
        );
    }
}