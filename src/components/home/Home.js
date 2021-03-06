import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Body from "../body/Body";
import "./home.css";

const index = () => {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
