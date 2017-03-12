import React from "react";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let reviewItems = (
            <div>
                <div className="clear">
                    <div style={{float: "left", width: "50%", height: "18px"}}></div>
                    <div style={{float: "left", width: "18%", textAlign: "right"}}>Price</div>
                    <div style={{float: "left", width: "18%", textAlign: "right"}}>Qty</div>
                    <div style={{float: "left", width: "14%", textAlign: "right"}}>Total</div>
                </div>
                <div className="block clear">
                    <div style={{float: "left", width: "50%", height: "18px"}} className="cell">
                        <div>
                            <img src="images/2.pic.jpg" style={{width: "40px"}}/>
                            <span style={{
                                display: "inline-block",
                                position: "relative",
                                bottom: "10px",
                                left: "20px"
                            }}>
                                    Particle playground
                                </span>
                        </div>
                    </div>
                    <div style={{float: "left", width: "18%", textAlign: "right"}} className="cell">$90.00</div>
                    <div style={{float: "left", width: "18%", textAlign: "right"}} className="cell">1</div>
                    <div style={{float: "left", width: "14%", textAlign: "right"}} className="cell">$90.00</div>
                </div>
            </div>
        );

        return (
            <div className="pi">
                <h3 style={{fontWeight: 700, fontSize: "24px"}}>3.Review items</h3>
                {reviewItems}
            </div>
        )
    }
}

module.exports = ReviewItem;
