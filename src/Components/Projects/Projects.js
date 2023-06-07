import React, { Component } from "react";
import "./Projects.css";
import whatsapp from "./images/whatsapp.png";
import grill from "./images/grill.png";
import canteen from "./images/canteen.png";
import sql from "./images/sql.png";
import tableau from "./images/tableau.png";
import excel from "./images/excel.png";
import { ProjectDiv } from "./styledP";

class Projects extends Component {
  render() {
    return (
      <ProjectDiv className="projects">
        <h1 className="flexRow margin name" id="Projects">
          Projects
        </h1>
        <section className="flexColumn projectSect">
          <h2>Comparative Study of Countries</h2>
          <div className="borderOne flexRow proj">
            <a
              href="https://public.tableau.com/views/FuentesProjectTableau/ComparativeStudy?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tableau} alt="Tableau" />
            </a>
          </div>
          <div>
            <p>
              {" "}
              You can click
              <a
                href="https://public.tableau.com/views/FuentesProjectTableau/ComparativeStudy?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                here{" "}
              </a>
              to download a copy of this project, or click the image above.
            </p>
            <p className="describe">
              The objective of this project was to help and insurance company
              compare various parameters such as income, life insurance share,
              market share, penetration, ratio of reinsurance accepted, and
              ratio of different countries using two sample datasets given.
            </p>
          </div>

          <hr />

          <h2 className="projTitle">Sales Dashboard</h2>
          <div className="borderOne flexRow proj">
            <a
              href="https://s3.amazonaws.com/cfuen.com/Fuentes+E+Commerce+Dashboard+Project.xlsx"
              target="_blank"
              rel="noreferrer"
            >
              <img src={excel} alt="Excel" />
            </a>
          </div>
          <div>
            <p>
              {" "}
              You can click
              <a
                href="https://s3.amazonaws.com/cfuen.com/Fuentes+E+Commerce+Dashboard+Project.xlsx"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                here{" "}
              </a>
              to download a copy of this project, or click the image above.
            </p>
            <p className="describe">
              The objective of this project was to help a company analyze their
              sales based on various product categories. The company wanted to
              add user control for product category so that they can monitor
              trends month-wise and region-wise.
            </p>
          </div>

          <hr />

          <h2 className="projTitle">Air Cargo Analysis</h2>
          <div className="borderOne flexRow proj">
            <a
              href="https://s3.amazonaws.com/cfuen.com/SQL+Project.docx"
              target="_blank"
              rel="noreferrer"
            >
              <img src={sql} alt="SQL" />
            </a>
          </div>
          <p>
            {" "}
            You can click
            <a
              href="https://s3.amazonaws.com/cfuen.com/SQL+Project.docx"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              here{" "}
            </a>
            to download a copy of this project, or click the image above.
          </p>
          <p className="describe">
            The objective of this project was to help an aviation company
            prepare reports on regular customers, busiest routes, ticket sales
            details, and other scenarios to improve the ease of travel and
            booking for customers using two sample datasets given.
          </p>
          <hr />

          <h2 className="projTitle">Capstone Project</h2>
          <div className="borderOne flexRow proj">
            <a
              href="https://s3.amazonaws.com/cfuen.com/Fuentes+BA+Capstone.docx"
              target="_blank"
              rel="noreferrer"
            >
              <img src={grill} alt="Grill House" />
            </a>
          </div>
          <p>
            {" "}
            You can click
            <a
              href="https://s3.amazonaws.com/cfuen.com/Fuentes+BA+Capstone.docx"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              here{" "}
            </a>
            for a downloaded copy of this project, or click the image above.
          </p>
          <p className="describe">
            The objective of this project was to help James Oliver's restaurants
            move from a paper-based system to an electronic portal system to
            track restaurant day-to-day management, from customer bills to menu
            item changes.
          </p>
          <hr />
          <h2 className="projTitle">WhatsApp Pay</h2>
          <div className="borderOne flexRow proj">
            <a
              href="https://s3.amazonaws.com/cfuen.com/WhatsApp+Project+Fuentes.docx"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
          <p>
            You can click
            <a href="https://s3.amazonaws.com/cfuen.com/WhatsApp+Project+Fuentes.docx">
              {" "}
              here{" "}
            </a>
            for a downloaded copy of this project, or click the image above.
          </p>
          <p className="describe">
            This was a project to help the launch of a new feature in WhatsApp;{" "}
            <em>"WhatsApp Payments"</em>.{" "}
          </p>
          <hr />
          <h2 className="projTitle">Canteen Ordering System</h2>
          <div className="borderOne flexRow proj">
            <a
              href="https://s3.amazonaws.com/cfuen.com/Canteen+Ordering+System+Fuentes.docx"
              target="_blank"
              rel="noreferrer"
            >
              <img src={canteen} alt="Canteen Ordering" />
            </a>
          </div>
          <p>
            {" "}
            You can click
            <a
              href="https://s3.amazonaws.com/cfuen.com/Canteen+Ordering+System+Fuentes.docx"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              here{" "}
            </a>
            to download a copy of this project, or click the image above.
          </p>
          <p className="describe">
            This objective of this project was to help Unilever headquarters
            move from in-person canteens to an online ordering system for their
            employees.
          </p>
        </section>
      </ProjectDiv>
    );
  }
}

export default Projects;
