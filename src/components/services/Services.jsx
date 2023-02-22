import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";
import { FaUnity } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>DSTA Defence Sciene Technology Agency</h5>
      <h2>My first internship experience</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Training Module Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Developed a mixed reality training module for flight line crew
                for the Republic of Singapore Air Force
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Used Unity Game Engine 3D and C# for the logic programming in
                Unity using the Microsoft Visual Studio IDE for development{" "}
                <FaUnity />
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Use of Photon Server, PUN2 and vuforia for networking features
                of different users in the simulation
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Familiarised with Hololens 2 MRTK framework and libraries and
                integrate it into the unity engine for simulation
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Use of blender to animation of models in the simulation</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Data Analytics</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Was part of the team that worked on data Analytics for the
                flight data of the MRTT for Republic of Singapore Air Force
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Familiarised with python3 and jupyter as the main platform for
                data analytics
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Use of numpy, pandas and matplotlib and other relevant libraries
                for the cleaning of flight data, plotting and visualizing of
                dataframes into graphs and other suitable visualizations
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Trend finding for useful parameters to get data on the need to
                change faulty parts of the aircraft
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Liasing with external contractors for possible trends and
                discussion of appropriate methodology towards the analytics of
                the data
              </p>
            </li>
          </ul>
        </article>
        {/* End of End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Business Automation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Learning of UIPath for the automation of certain admin processes
                within the Department
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Learn to manipulate Robotic Process Automation Software to
                automate processes that are repetitive
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Learn to capture text using said software through the use of
                Artifical Intelligence Text Recognition
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Learn to do webscrapping by exploiting the html elements of the
                given website
              </p>
            </li>
          </ul>
        </article>
        {/* End of CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
