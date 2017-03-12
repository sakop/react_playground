import Header from "./components/header";
import PI from "./components/payment_method";
import ReviewItem from "./components/review_item";
import BillingAddress from "./components/billing_address";
import OrderInfo from "./components/order_Info";
import React from "react";
import ReactDom from "react-dom";

require("style-loader!css-loader!../css/as.css");
function Content(props) {
    return (
        <div className="content">
            <div className="leftContent clear">
                <BillingAddress existingBillingAddress={true}/>
                <hr/>
                <PI existingPi={false} existingBillingAddress={true}/>
                <hr/>
                <ReviewItem/>
            </div>
            <div className="rightContent">
                <OrderInfo existingPi={false} existingBillingAddress={true}/>
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


