import React, { Component } from "react";
import smile from "./images/Cara.jpg";
import figma from "./icons/figma.png";

import "./Welcome.css";
import { WelcomeDiv, Images } from "./styledW";

class Welcome extends Component {
  render() {
    return (
      <WelcomeDiv>
        <header id="Top" className="margin">
          <h1 className="name">Cara Fuentes</h1>
        </header>
        <h2 id="Welcome">Welcome</h2>
        <div className="flexRow" id="Info">
          <div className="flexColumn welcomep">
            <p>
              My name is Cara and I want to thank you for visiting my page. Let
              me take a minute here to share what it is that I do.
            </p>
            <p>
              I am a Data Analyst with a history in Mental Health Therapy.....writing more and more to see 
              where this will lead on the page itself to maybe see if it will go beyond the div scope and I 
              think I fixed it now
            </p>
          </div>
          <div className="headshot">
            <span title="Welcome!">
                <img className="centerImage" alt="Welcome" src={smile} />
            </span>
          </div>
        </div>
      </WelcomeDiv>
    );
  }
}

export default Welcome;
