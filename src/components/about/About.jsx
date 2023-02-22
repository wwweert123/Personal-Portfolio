import React from "react";
import "./about.css";
import ME from "../../assets/doge.png";
import NUS from "../../assets/NUS.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";

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
              <small>NUS Computer Engineering Year 1</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            voluptas, assumenda voluptatem amet voluptates a. Dicta impedit
            ullam perspiciatis eius est aperiam non nostrum. Modi nam alias enim
            aliquid odit?
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
