import React, { Component } from "react";
import Header from './components/Header';
import Info from './components/Info';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';

class App extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.previewRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      expFrom: '',
      expTo: '',
      schoolName: '',
      title: '',
      eduFrom: '',
      eduTo: '',
    }
  };

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({ isDisabled: true });
  }

  getFormRef = () => {
    return this.formRef;
  }

  getPreviewRef = () => {
    return this.previewRef;
  }

  render() {
    return (
      <div>
        <Header getFormRef={this.getFormRef}
          getPreviewRef={this.getPreviewRef} />
        <div ref={this.formRef}>
          <Info handleChange={this.handleChange}
            handleOnClick={this.handleOnClick}
            state={this.state} />
          <Experience handleChange={this.handleChange}
            handleOnClick={this.handleOnClick}
            state={this.state} />
          <Education handleChange={this.handleChange}
            handleOnClick={this.handleOnClick}
            state={this.state} />
        </div>
        <div ref={this.previewRef} className="hide">
          <Preview data={this.state} />
        </div>
      </div>
    );
  }

}


export default App;