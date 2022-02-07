import React, { Component } from "react";

class Preview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const data = {
            name: this.props.data.name,
            email: this.props.data.email,
            phoneNumber: this.props.data.phoneNumber,
            schoolName: this.props.data.schoolName,
            title: this.props.data.title,
            expFrom: this.props.data.expFrom,
            expTo: this.props.data.expTo,
            companyName: this.props.data.companyName,
            positionTitle: this.props.data.positionTitle,
            mainTasks: this.props.data.mainTasks,
            eduFrom: this.props.data.educFrom,
            eduTo: this.props.data.educTo,
        }
        return (
            <div className="preview">
                <div className="education">
                    <h3>Education</h3>
                    <ul>
                        <li>{data.schoolName}</li>
                        <li>{data.title}</li>
                        <li>{data.eduFrom}</li>
                        <li>{data.eduTo}</li>
                    </ul>
                </div>
                <div className="avatar">
                    <h1>avatar</h1>
                </div>
                <div className="info">
                    <h3>Personal Info:</h3>
                    <ul>
                        <li>{data.name}</li>
                        <li>{data.email}</li>
                        <li>{data.phoneNumber}</li>
                    </ul>
                </div>
                <div className="experience">
                    <h3>Work Experience</h3>
                    <ul>
                        <li>{data.companyName}</li>
                        <li>{data.positionTitle}</li>
                        <li>{data.mainTasks}</li>
                        <li>{data.expFrom}</li>
                        <li>{data.expTo}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Preview;