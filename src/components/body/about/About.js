import React from "react";
import SocialContact from "../../common/social-contact/SocialContact";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h3 className="typewriter">
            Hello everyone👋<span className="info-name">I'm Giorgi</span>
          </h3>
          <br />
          <span className="info-text">
            A passionate Full Stack Developer 🚀 having an experience of
            building Web applications with JavaScript / Reactjs / Nextjs /NodeJs
            and some other cool libraries and frameworks. I'm 19 years old,
            studying at Business and Technologies University.
          </span>
        </div>
        <div className="about-photo">
          <img
            className="picture"
            src={require("../../../assets/coding.png")}
            alt="coding"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};

export default About;
