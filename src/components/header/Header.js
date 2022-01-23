import React, { useState } from "react";
import "./header.css";
import Web from "./web/Web";
import Mobile from "./mobile/Mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="logo name">𝒢𝒾𝑜𝓇𝑔𝒾 𝒦𝒶𝓁𝒶𝓉𝑜𝓏𝒾</div>
        <div className="menu">
          <div className="web-menu">
            <Web />
          </div>
          <div className="mobile-menu">
            <div onClick={() => setIsOpen(!isOpen)}>
              <img
                className="menu-icon"
                src="https://img.icons8.com/ios-filled/36/000000/menu--v5.png"
                alt="menu"
              />
            </div>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
