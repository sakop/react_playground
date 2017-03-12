import React from "react";

class OrderInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let placeOrderButton = null;
        if (this.props.existingPi && this.props.existingBillingAddress) {
            placeOrderButton = (
                <div className="block">
                    <div className="button place-order">
                        Place Order
                    </div>
                    <div className="term">
                        By placing your order, you agree to Unity's Terms of Service and License Policy
                    </div>
                </div>
            )
        }
        return (
            <div>
                {placeOrderButton}
                <div className="block" style={{marginTop: "10px"}}>
                    <div className="clear">
                        <div className="attr">
                            Subtotal:
                        </div>
                        <div className="value">
                            $90.00
                        </div>
                    </div>


                    <div className="clear">
                        <div className="attr">
                            VAT:
                        </div>
                        <div className="value">
                            $0.00
                        </div>
                    </div>

                    <div className="clear">
                        <div className="attr">
                            <h2>Order Total:</h2>
                        </div>
                        <div className="value">
                            <h2> $90.00</h2>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

module.exports = OrderInfo;
