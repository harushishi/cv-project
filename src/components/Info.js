import React, { Component } from "react";
import './Style.css';

class Info extends Component {
    constructor(props) {
        super(props);


    }

    handleChange = (e) => {
        this.props.handleChange(e);
    }

    handleOnClick = (e) => {
        this.props.handleOnClick(e);
    }

    render() {

        return (
            <div className="info-box">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" required
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Email:
                        <input type="email" name="email" required
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Phone Number:
                        <input type="tel" name="phoneNumber" required
                            onChange={this.handleChange}
                        />
                    </label>
                </form>
            </div>
        );
    };
}

export default Info;
