import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/doge.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    /* you can name the div according to the react component */
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Frederick Pua</h1>
        <h5 className="text-light">Computer Engineering Undergraduate</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
