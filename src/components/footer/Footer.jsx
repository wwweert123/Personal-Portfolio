import React from "react";
import "./footer.css";
// import { FaFacebookF } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
// import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Frederick Pua
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#services">Internship Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div> */}

      <div className="footer__copyright">
        <p>
          This website is made by following a{" "}
          <a
            href="https://youtu.be/G-Cr00UYokU"
            target="_blank"
            rel="noreferrer"
          >
            tutorial
          </a>{" "}
          on Youtube by EGATOR. It made me learn a lot about website building
          with React!
        </p>
        <small>&copy; Frederick. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
