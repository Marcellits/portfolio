import React from 'react';
import Easy from "../images/Easyweather.png";
import Smart from "../images/Smartagenda.png";
import Trivia from "../images/trivia.gif";

const Projects = () => {

    return (
        <div id="projects " className="components" >
            <h1  id="projects-title" className="title-component">PROJECTS</h1>
            <div className="cards">
                <div className="pattern-diagonal-lines-sm gray-lighter">
                    <div className="card"  >
                        <img className="card-img-top" src={Easy} alt="Imagem de capa do card"/>
                        <div className="card-body">
                            <h5 className="card-title">Easy Weather</h5>
                            <p className="card-text">
                            Easy Weather is a React app that pulls weather information and 
                            displays tips about the weather condition of the day. 
                            Just type the name of the city and voilà!   
                            To manipulate date and time we used Moment.js and to stylize we used React Bootstrap, 
                            such as Button and Cards to display the forecast. 
                            In addition, we used a typewriter effect on the home page, handling CSS properties 
                            to display it.
                            </p>
                            <a href="https://easy-weather-wyncode.herokuapp.com" class="btn btn-outline-light">Click here</a>
                        </div>
                    </div>
                </div>
                <div className="pattern-diagonal-lines-sm gray-lighter">
                    <div className="card" >
                        <img className="card-img-top" src={Smart} alt="Imagem de capa do card"/>
                        <div className="card-body">
                            <h5 className="card-title">SmartAgenda</h5>
                            <p className="card-text">
                                SmartAgenda is a web application for business owners to keep track of client information
                                as well as appointments which are displayed on their calendar. 
                                Javascript, MongoDB, React, Express and Node.js were used to develop this project and used 
                                FullCalendar.io library, Moment.js and React Date-Picker in the frontend. 
                                This project is under continuing improvement for next releases.
                                
                            </p>
                            <a href="https://smartagenda-wyncode.herokuapp.com" class="btn btn-outline-light">Click here</a>
                        </div>
                    </div>
                </div>    
                <div className="pattern-diagonal-lines-sm gray-lighter">
                    <div className="card" >
                        <img className="card-img-top" src={Trivia} alt="Imagem de capa do card"/>
                        <div className="card-body">
                            <h5 className="card-title">Next Tech Trivia</h5>
                            <p className="card-text">
                                Next Tech Trivia is an interactive game for Google Cloud Next '20: OnAir'. 
                                Our amazing team developed dynamic app so the user can enjoy an awesome experience! 
                                If user answers 4-5 questions correctly, user can spin the wheel for a prize!
                                <br/>
                                This project is coded in Javascript + MERN Stack. To build spin wheel, 
                                we applied Canvas. We also used 3 API's:
                                Gitfit as rewards, SendGrid to send emails to users, and 
                                Cloudinary to store images. 
                            </p>
                            <a href="https://github.com/Marcellits/trivia-game" class="btn btn-outline-light">Click here</a>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}









export default Projects;