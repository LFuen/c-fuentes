import React, { Component } from "react";
import smile from "./images/Cara.jpg";

import "./Welcome.css";
import { WelcomeDiv } from "./styledW";

class Welcome extends Component {
  render() {
    return (
      <WelcomeDiv>
        <header id="Top" className="margin">
          <h1 className="name">Cara Fuentes</h1>
        </header>
        <div className="flexColumn">
          <span title="Welcome!">
            <img className="centerImage" alt="Welcome" src={smile} />
          </span>
        </div>
        <div className="info">
          <div className="flexColumn welcomep">
            <p>My name is Cara and I want to thank you for visiting my page!</p>
            <p>
              Here you will find my projects, contact information, and a little bit about me!
            </p>
          </div>
        </div>
      </WelcomeDiv>
    );
  }
}

export default Welcome;
