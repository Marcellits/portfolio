import React from "react";
import JS from "../images/JS.png";
import React_logo from "../images/React_logo.png";
import MongoDB from "../images/MongoDB.png";
import Express from "../images/Express.png";
import Node from "../images/NodeJS.png";
import Mongoose from "../images/Mongoose.png";
import Bootstrap from "../images/Bootstrap.png";
import Ai from "../images/Ai.png";
import Ps from "../images/Ps.png";

const Skills = () => {
  const logos = [
    {
      name: "Javascript",
      source: JS,
    },
    {
      name: "React",
      source: React_logo,
    },
    {
      name: "Express",
      source: Express,
    },
    {
      name: "Node",
      source: Node,
    },
    {
      name: "MongoDB",
      source: MongoDB,
    },
    {
      name: "Mongoose",
      source: Mongoose,
    },
    {
      name: "Bootstrap",
      source: Bootstrap,
    },
    {
      name: "Adobe Illustrator",
      source: Ai,
    },
    {
      name: "Adobe Photoshop",
      source: Ps,
    },
  ];

  return (
    <div className="components">
      <h1 className="title-component">SKILLS</h1>
      <p>
        Being trained as a Full Stack Web developer by{" "}
        <span>
          <a id="wyncode-link" href="https://www.wyncode.co">
            Wyncode Academy
          </a>
        </span>
        , I acquired extensive knowledge in Javascript and the React library for
        creating dynamic user interfaces. Knowledge in database management using
        MongoDB and Mongoose. To develop server structure for web applications,
        I use Express and Node.js. Intermediate knowledge manipulating images
        and creating graphic designs.
      </p>
      <div class="container">
        <div class="row">
          {logos.map((logo) => {
            return (
              <div class="col-logos" key={logo.key}>
                <img
                  className="logos"
                  src={logo.source}
                  alt={`${logo.name} Logo`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
