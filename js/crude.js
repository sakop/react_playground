import Header from "./components/header";
import PI from "./components/payment_method";
import ReviewItem from "./components/review_item";
import BillingAddress from "./components/billing_address";
import OrderInfo from "./components/order_Info";
import React from "react";
import ReactDom from "react-dom";


var dataUrl = require("url-loader?limit=1000!../images/a.jpg");

function Content(props) {
    return (
        <div className="content">
            <img src={dataUrl}/>
            <div className="leftContent clear">
                <BillingAddress existingBillingAddress={false}/>
                <hr/>
                <PI existingPi={false} existingBillingAddress={false}/>
                <hr/>
                <ReviewItem/>
            </div>
            <div className="rightContent">
                <OrderInfo existingPi={false} existingBillingAddress={false}/>
            </div>
        </div>
    );
}

ReactDom.render(
    <div>
        <Header/>
        <Content/>
    </div>
    , document.body);


