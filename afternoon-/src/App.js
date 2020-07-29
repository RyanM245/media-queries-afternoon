import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropDownVisible: false,
    };
  }
  toggleDropDown = () => {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header-main">
          <img
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
            alt="Logo"
          />
          <nav className="desktop">
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>
          <div className="dropdown" onClick={this.toggleDropDown}>
          MENU &#9776;
          </div>
          {this.state.dropDownVisible ? (
            <nav className="mobile">
              <span className="mo">SERVICES</span>
              <span className="mo">PORTFOLIO</span>
              <span className="mo">ABOUT</span>
              <span className="mo">TEAM</span>
              <span className="mo">CONTACT</span>
            </nav>
          ) : null}
        </header>
        <section className="welcome">
          <h2>Welcome To My Site</h2>
          <h1>IT'S NICE TO MEET YOU!</h1>
        </section>
      </div>
    );
  }
}

export default App;
