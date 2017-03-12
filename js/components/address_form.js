import React from "react";

class AddressForm extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <form>
                <div className="clear">
                    <div className="half">
                        <div className="form-attr">
                            First Name *
                        </div>
                        <div className="form-input">
                            <input name="firstName"/>
                        </div>
                    </div>

                    <div className="half">
                        <div className="form-attr">
                            Last Name *
                        </div>
                        <div className="form-input">
                            <input name="lastName"/>
                        </div>
                    </div>

                    <div className="half">
                        <div className="form-attr">
                            Email *
                        </div>
                        <div className="form-input">
                            <input name="Email"/>
                        </div>
                    </div>

                    <div className="half">
                        <div className="form-attr">
                            Phone *
                        </div>
                        <div className="form-input">
                            <input name="phone"/>
                        </div>
                    </div>

                    <div className="half">
                        <div className="form-attr">
                            Company Name *
                        </div>
                        <div className="form-input">
                            <input name="companyName"/>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: "30px"}}>
                    <button className="button" style={{marginRight: "10px"}}>Update</button>
                    <button className="button">Cancel</button>
                </div>
            </form>
        )
    }
}

module.exports = AddressForm;
