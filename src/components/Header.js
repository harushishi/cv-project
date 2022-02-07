import React, { Component } from "react";
import './Style.css';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }


    showForm = () => {
        const form = this.props.getFormRef();
        form.current.className = "";
        const preview = this.props.getPreviewRef();
        preview.current.className = "hide";
    }


    showPreview = () => {
        const form = this.props.getFormRef();
        form.current.className = "hide";
        const preview = this.props.getPreviewRef();
        preview.current.className = "";
    }

    render() {

        return (
            <header>
                <nav className="nav">
                    <h3>CV Application</h3>
                    <button className="btn-edit" onClick={this.showForm}>Edit</button>
                    <button className="btn-preview" onClick={this.showPreview}>Preview</button>
                </nav>
            </header >
        );
    };
}

export default Header;
