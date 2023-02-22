import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/frederick-pua-310b1b227"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/wwweert123" target="_blank">
        <ImGithub />
      </a>
      {/* <a href="https://dribble.com" target="_blank">
        <BsDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
