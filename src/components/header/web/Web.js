import React from "react";
import "./web.css";

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#skills">
          <img
            className="option-icon"
            src="https://img.icons8.com/color/30/000000/strength.png"
            alt="skills"
          />
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#projects">
          <img
            className="option-icon"
            src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/30/000000/external-document-engineering-icongeek26-linear-colour-icongeek26.png"
            alt="projects"
          />
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <img
            src="https://img.icons8.com/external-konkapp-flat-konkapp/30/000000/external-work-station-work-from-home-konkapp-flat-konkapp.png"
            alt="work"
          />{" "}
          Work Experience
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <img
            src="https://img.icons8.com/external-itim2101-flat-itim2101/30/000000/external-mail-human-resource-itim2101-flat-itim2101.png"
            alt="contact"
          />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
