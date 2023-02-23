import React from "react";
import "./experience.css";
// import { BiBadgeCheck } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 size={42} className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 size={42} className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript
                size={42}
                className="experience__details-icon"
              />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBootstrapFill
                size={42}
                className="experience__details-icon"
              />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact size={42} className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiCsharp size={42} className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCplusplus size={42} className="experience__details-icon" />
              <div>
                <h4>C++/C</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython size={42} className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
