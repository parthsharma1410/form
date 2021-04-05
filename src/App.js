import React, { Component } from "react";
import './App.css'
/* import mobiscroll */
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
                             
mobiscroll.settings = {
    theme:"auto"
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          iosLightSwitch: true
      };
  }
  render() {
      return (
          <div className="mbsc-grid mbsc-no-padding">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">PythonMate</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div className="flex">
<div className="mbsc-row form animate__animated animate__fadeIn">
                <mobiscroll.Form theme="ios" themeVariant="light" className="mbsc-col-sm-12 mbsc-col-md-4 mbsc-form-box mbsc-form-grid">
                  <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle><b>Select Start date and Shift times</b></mobiscroll.FormGroupTitle>
                    <h6>Start Date:</h6>
                    <mobiscroll.Input type="date" data-icon="user4" inputStyle="box" labelStyle="floating" placeholder="Input with label"></mobiscroll.Input>
                    <mobiscroll.Dropdown inputStyle="box" labelStyle="floating" label="Select Repeat Type">
                      <option value="None">None</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                    </mobiscroll.Dropdown>
                    <mobiscroll.Dropdown inputStyle="box" labelStyle="floating" label="Select Shift Type">
                      <option value="Morning Shift - 5am to 9am">Morning Shift - 5am to 9am</option>
                      <option value="Afternoon Shift - 9am to 3pm">Afternoon Shift - 9am to 3pm</option>
                      <option value="Evening Shift - 3pm to 9pm">Evening Shift - 3pm to 9pm</option>
                      <option value="Night Shift - 9pm to 4am">Night Shift - 9pm to 5am</option>
                    </mobiscroll.Dropdown>
                    <mobiscroll.Input type="time" data-icon="user4" inputStyle="box" labelStyle="floating" placeholder="Input with label">Start Time</mobiscroll.Input>
                    <mobiscroll.Input type="time" data-icon="user4" inputStyle="box" labelStyle="floating" placeholder="Input with label">End Time</mobiscroll.Input>
                    <h6>Select days of the week:</h6>
                    <mobiscroll.Checkbox inputStyle="box" checked={this.state.iosLightCheck1} onChange={this.setIosLightCheck1}>Monday</mobiscroll.Checkbox>
                    <mobiscroll.Checkbox inputStyle="box" checked={this.state.iosLightCheck2} onChange={this.setIosLightCheck2}>Tuesday</mobiscroll.Checkbox>
                    <mobiscroll.Checkbox inputStyle="box" checked={this.state.iosLightCheck3} onChange={this.setIosLightCheck3}>Wednesday</mobiscroll.Checkbox>
                    <mobiscroll.Checkbox inputStyle="box" checked={this.state.iosLightCheck4} onChange={this.setIosLightCheck4}>Thursday</mobiscroll.Checkbox>
                    <mobiscroll.Checkbox inputStyle="box" checked={this.state.iosLightCheck5} onChange={this.setIosLightCheck5}>Friday</mobiscroll.Checkbox>
                    <mobiscroll.Checkbox inputStyle="box" checked={this.state.iosLightCheck6} onChange={this.setIosLightCheck6}>Saturday</mobiscroll.Checkbox>
                    <mobiscroll.Checkbox inputStyle="box" checked={this.state.iosLightCheck7} onChange={this.setIosLightCheck7}>Sunday</mobiscroll.Checkbox>
                    <mobiscroll.Switch inputStyle="box" checked={this.state.iosLightSwitch} onChange={this.setIosLightSwitch}>Weekdays Only</mobiscroll.Switch>
                  </mobiscroll.FormGroup>
                </mobiscroll.Form>  
                <div className="pcdiv animate__animated animate__fadeIn animate__delay-1s">
                      <img src='https://image.freepik.com/free-photo/top-view-business-office-desk-background-the-applying-for-a-job-form-and-pen-pencil-eyeglasses-tree-on-wooden-table-background-with-copy-space_1921-21.jpg' alt='Image'></img>
                  </div>      
              </div>
              <div className="mbsc-btn-group">
                        <mobiscroll.Button color="primary button">Add +</mobiscroll.Button>
                    </div>
          </div>      
      </div>

      );
  }
  
  setIosLightSwitch = (ev) => {
      this.setState({
          iosLightSwitch: ev.target.checked
      });
  }

  setIosLightCheck1 = (ev) => {
      this.setState({
          iosLightCheck: ev.target.checked
      });
  }

  setIosLightCheck2 = (ev) => {
    this.setState({
        iosLightCheck: ev.target.checked
    });
}
  setIosLightCheck3 = (ev) => {
    this.setState({
        iosLightCheck: ev.target.checked
    });
}
setIosLightCheck4 = (ev) => {
  this.setState({
      iosLightCheck: ev.target.checked
  });
}

setIosLightCheck5 = (ev) => {
  this.setState({
      iosLightCheck: ev.target.checked
  });
}

setIosLightCheck6 = (ev) => {
  this.setState({
      iosLightCheck: ev.target.checked
  });
}

setIosLightCheck7 = (ev) => {
  this.setState({
      iosLightCheck: ev.target.checked
  });
}

}

export default App;