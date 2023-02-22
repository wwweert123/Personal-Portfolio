import React from "react";
import "./about.css";
import ME from "../../assets/doge.png";
import NUS from "../../assets/NUS.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/* <FiAward className="about__icon" /> */}
              <div className="about__icons">
                <a
                  href="https://www.nus.edu.sg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={NUS} alt="NUS" />
                </a>
              </div>
              <h5>Education</h5>
              <small>NUS Computer Engineering</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Internships</h5>
              <small>Ready to take on more internship roles!</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Passionate</h5>
              <small>Eager and Fast Learner!</small>
            </article>
          </div>
          <p>
            Hi, my name is Pua Cheng Xuan Frederick. I am currently a year 1
            Computer Engineering Student. I enjoy playing with computer
            components as well as computer software. I take pleasure in learning
            new things and applying them to meaningful uses.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
