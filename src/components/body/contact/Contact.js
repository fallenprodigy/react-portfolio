import React from "react";
import Separator from "../../common/social-contact/separator/Separator";
import SocialContact from "../../common/social-contact/SocialContact";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title"> Contact Me </label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
          <div>
            <div className="download">
              <a download href={require("../../../assets/resume.pdf")}>
                <img
                  className="download"
                  src="https://img.icons8.com/material-outlined/36/000000/download--v1.png"
                  alt="download"
                />
                Download Resume
              </a>
            </div>
            {/* <div> */}
            {/* <img
              className="message"
              src={require("../../../assets/message.png")}
              alt="message"
            /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
