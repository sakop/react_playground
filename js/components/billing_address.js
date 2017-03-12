import React from "react";
import AddressForm from "./address_form";

class BillingAddress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let body = null;
        if (this.props.existingBillingAddress) {
            body = (
                <div style={{marginBottom: "20px"}}>
                    <div className="block">
                    <span className="saved_pi">
                        Your saved Sell To Address
                    </span>
                        <span className="ordinary right">
                       <a href="#"> Change Sell To Address</a>
                    </span>
                    </div>
                    <div className="block">
                        <div className="deeper clear">
                            <div className="visa">
                                <div className="third">
                                    Room 101 Baker street
                                </div>
                                <div className="third">
                                    CA
                                </div>
                                <div className="third">
                                    United States
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            body = (
                <div style={{marginBottom: "20px"}}>
                    <div className="block">
                    <span className="saved_pi">
                       No existing BillingAddress
                    </span>
                        <span className="ordinary right">
                            {
                                <a href="#"> Add new Billing Address</a>
                            }
                    </span>
                    </div>
                </div>
            )
        }
        return (
            <div className="pi">
                <h3 style={{fontWeight: 700, fontSize: "24px"}}>1.Sell To Address</h3>
                {body}
                {this.props.addressForm && <AddressForm/>}

            </div>
        )
    }
}

module.exports = BillingAddress;
