import React from "react";
import Resume from "../utils/Resume.pdf";

const Aboutme = () => {
  return (
    <div className="aboutme">
      <h3 className=" title title-component"> ABOUT ME</h3>
      <div className="quote_Eisntein">
        <h5 id="quote-text">
          "The important thing is not to stop questioning. Curiosity has its own
          reason for existing.”
        </h5>
        <h5 id="quote-author">Albert Einstein</h5>
      </div>
      <div className="text-aboutme">
        <p>
          I always tried to understand the why of things, so curiosity opened my
          mind to explore new worlds and allowed me to acquire different types
          of knowledge. I’m the type of person who discusses arts and philosophy
          with friends and 5 minutes later buys a book about python language to
          start a new project.
        </p>
        <p>
          I’m constantly challenging myself and I never stop learning. For this
          reason, I became a Full Stack Web Developer with expertise in
          Javascript, React, MongoDB, Express and Node.js. I participated in
          projects such as Easy Weather and Smart Agenda web applications and
          produced several other smaller personal projects.
        </p>
        <p>
          If you want to know more about me and my experience, take a look at my
          Resume or access my social medias right below.
        </p>
      </div>
      <div className="container social-medias">
        <div className="row">
          <div className="col">
            <a href={Resume}>
              Resume
              <i
                id="resume"
                class="fa fa-file-text fa-3x"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://www.github.com/marcellits">
              <i className="fa fa-github-square fa-3x" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/marcellits/">
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
            </a>
            <a href="https://twitter.com/_marcellits_">
              <i class="fa fa-twitter-square fa-3x" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
