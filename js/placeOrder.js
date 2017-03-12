import Header from "./components/header";
import PI from "./components/payment_method";
import BillingAddress from "./components/billing_address";
import ReviewItem from "./components/review_item";
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
                <PI existingPi={true} existingBillingAddress={true}/>
                <hr/>
                <ReviewItem/>
            </div>
            <div className="rightContent">
                <OrderInfo existingPi={true} existingBillingAddress={true}/>
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


