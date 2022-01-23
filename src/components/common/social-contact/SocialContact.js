import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";

const SocialContact = () => {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item, index) => {
        return (
          <a key={index} target="_blank" rel="noreferrer" href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} alt="icon" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;
