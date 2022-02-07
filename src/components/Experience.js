import React, { Component } from "react";
import './Style.css';

class Experience extends Component {
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
            <div className="exp-box">
                <form>
                    <label>
                        Company Name:
                        <input type="text" name="companyName" required
                            onChange={this.handleChange} />
                    </label>

                    <label>
                        Position Title:
                        <input type="text" name="positionTitle" required
                            onChange={this.handleChange} />
                    </label>

                    <label>
                        Main Tasks:
                        <input type="text" name="mainTasks" required
                            onChange={this.handleChange} />
                    </label>

                    <label>
                        From:
                        <input type="text" name="expFrom" required
                            onChange={this.handleChange} />
                    </label>

                    <label>
                        To:
                        <input type="text" name="expTo" required
                            onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
}

export default Experience;
