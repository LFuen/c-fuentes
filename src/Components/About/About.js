import React, { Component } from "react";
import "./About.css";
import { AboutDiv } from "./styledA";

class About extends Component {
  render() {
    return (
      <AboutDiv className="about">
        <section className="bg-color">
          <h1 id="About" className="name">About</h1>

          <div className="info">
            <div className="flexColumn">
              <p className="item">
                After almost a decade working in mental health, I have decided
                to pursue another passion of mine; analytics. With a master's
                degree in mental health counseling and a certificate in business
                analysis, I have become pretty well-rounded! I am excited to use
                my analytic skills and I look forward to continuing this journey
                in my new career!
              </p>

              <p>I have training in the following areas:</p>
            </div>
          </div>

          <div className="borderOne" id="services">
            <p>
              <b>SQL</b>
            </p>
            <p>
              <b>Excel (for Data Analysis)</b>
            </p>
            <p>
              <b>Tableau</b>
            </p>
            <p>
              <b>Figma</b>
            </p>
            <p>
              <b>Balsamiq</b>
            </p>
            <p>
              <b>Python (for Data Analysis)</b>
            </p>
            <p>
              <b>Babok Guide for Business Analysis</b>
            </p>
          </div>
        </section>
      </AboutDiv>
    );
  }
}

export default About;
