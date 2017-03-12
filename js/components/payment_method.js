import React from "react";

class PI extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let piBody = null;
        if (this.props.existingPi) {
            piBody = (
                <div style={{marginBottom: "20px"}}>
                    <div className="block">
                    <span className="saved_pi">
                        Your saved payment method
                    </span>
                        <span className="ordinary right">
                       <a href="#"> Change Payment method</a>
                    </span>
                    </div>
                    <div className="block">
                        <div className="deeper clear">
                            <div className="visa">
                                <div className="third">
                                    VISA ending in 6321
                                </div>
                                <div className="third">
                                    Jeff Birk
                                </div>
                                <div className="third">
                                    01/2018
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            piBody = (
                <div style={{marginBottom: "20px"}}>
                    <div className="block">
                    <span className="saved_pi">
                       No existing PI
                    </span>
                        <span className="ordinary right">
                            {
                                this.props.existingBillingAddress && <a href="#"> Add new Payment method</a>
                            }
                    </span>
                    </div>
                </div>
            )
        }
        return (
            <div className="pi">
                <h3 style={{fontWeight: 700, fontSize: "24px"}}>2.Payment method</h3>
                {piBody}
            </div>
        )
    }
}

module.exports = PI;
