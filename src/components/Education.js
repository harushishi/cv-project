import React, { Component } from "react";
import './Style.css';

class Education extends Component {
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
            <div className="educ-box">
                <form>
                    <label>
                        School Name:
                        <input type="text" name="schoolName" required
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Title:
                        <input type="text" name="title" required
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        From:
                        <input type="text" name="educFrom" required
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        To:
                        <input type="text" name="educTo" required
                            onChange={this.handleChange}
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default Education;
