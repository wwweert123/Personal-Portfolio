import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/react-portfolio-1.jpg";
import IMG2 from "../../assets/react-portfolio-2.jpg";
import IMG3 from "../../assets/react-portfolio-3.jpg";
import IMG4 from "../../assets/react-portfolio-4.jpg";
import discordjs from "../../assets/discordjs.png";

import WidgetBot from "@widgetbot/react-embed";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 3",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project 4",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 5,
    image: IMG1,
    title: "Project 5",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 6,
    image: IMG2,
    title: "Project 6",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container widget__container">
        <WidgetBot
          className="widget"
          server="905688171390591016"
          channel="905688171390591020"
        />
        <article key={1} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={discordjs} alt={"Project 1"} />
          </div>
          <h3>{"Discord Bot"}</h3>
          {/* the _blank would open the link in a new tab*/}
          <div>
            <p>Bustiming, causeway pictures and picture of the cute dogs!</p>
            <p>More features coming soon! Work in Progress!</p>
          </div>
        </article>
      </div>

      <div className="container portfolio__container hidden">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            /* key is needed for the map */
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              {/* the _blank would open the link in a new tab*/}
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>

                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
