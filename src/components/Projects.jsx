import React from "react";
import Easy from "../images/Easyweather.png";
import Smart from "../images/Smartagenda.png";
import Trivia from "../images/trivia.gif";
import Tictactoe from "../images/tictactoe.png";

const Projects = () => {
  const projs = [
    {
      name: "Easy Weather",
      source: Easy,
      alt: "Easy Weather screenshot",
      text:
        "Easy Weather is a React app that pulls weather information and displays tips about the weather condition of the day. Just type the name of the city and voilà! To manipulate date and time we used Moment.js and to stylize we used React Bootstrap, such as Button and Cards to display the forecast. In addition, we used a typewriter effect on the home page, handling CSS properties to display it.",
      href: "https://easy-weather-wyncode.herokuapp.com",
    },
    {
      name: "SmartAgenda",
      source: Smart,
      alt: "SmartAgenda screenshot",
      text:
        "SmartAgenda is a web application for business owners to keep track of client information as well as appointments which are displayed on their calendar. Javascript, MongoDB, React, Express and Node.js were used to develop this project and used FullCalendar.io library, Moment.js and React Date-Picker in the frontend. This project is under continuing improvement for next releases.",
      href: "https://smartagenda-wyncode.herokuapp.com",
    },
    {
      name: "Next Tech Trivia",
      source: Trivia,
      alt: "Trivia gif screenshot",
      text:
        " Next Tech Trivia is an interactive game for Google Cloud Next '20: OnAir. Our amazing team developed dynamic app so the usercan enjoy an awesome experience! If user answers 4-5 questions correctly, user can spin the wheel for a prize! This project is coded in Javascript + MERN Stack. To build spin wheel, we applied Canvas. We also used 3 API's: Gitfit as rewards, SendGrid to send emails to users, and Cloudinary to store images.",
      href: "https://github.com/Marcellits/trivia-game",
    },
    {
      name: "React SuperGames",
      source: Tictactoe,
      alt: "React Games screenshot",
      text:
        " React SuperGames is a web application with well known games. All of them are built using JavaScript + REACT.",
      href: "https://react-supergames.netlify.app/",
    },
  ];

  return (
    <div id="projects " className="components">
      <h1 id="projects-title" className="title-component">
        PROJECTS
      </h1>
      <div className="cards">
        {projs.map((proj) => {
          return (
            <div className="pattern-diagonal-lines-sm gray-lighter">
              <div className="card" key={proj.key}>
                <img
                  className="card-img-top"
                  src={proj.source}
                  alt={proj.alt}
                />
                <div className="card-body">
                  <h5 className="card-title">{proj.name}</h5>
                  <p className="card-text font-text-card">{proj.text}</p>
                  <a href={proj.href} class="btn btn-outline-light">
                    Click here
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
