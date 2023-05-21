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
              I am a Data Analyst with a history in Mental Health Therapy.....
            </p>
          </div>
          <div className="headshot">
            <span title="Welcome!">
                <img className="centerImage" alt="Welcome" src={smile} />
            </span>
          </div>
        </div>
        <div className="borderOne" id="versed">
          <p>
            <b>Specialties</b>
          </p>
          <p>
            <b>Specialties</b>
          </p>
        </div>
        <div>
          <Images>
            <img className="badge" src={figma} alt="Figma" />
          </Images>
        </div>
      </WelcomeDiv>
    );
  }
}

export default Welcome;
