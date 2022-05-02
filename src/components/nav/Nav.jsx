import React from "react";
import "./nav.css";
/*some icons are black */
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <FiHome />
      </a>
      <a href="#about">
        <FiUser />
      </a>
      <a href="#experience">
        <BsBookmarks />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
