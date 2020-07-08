import React from 'react';
import Easy from "../images/Easyweather.png";
import Smart from "../images/Smartagenda.png";

const Projects = () => {

    return (
        <div id="projects " >
            <h2  id="projects-title">PROJECTS</h2>
            <div className="cards">
                <div className="card" >
                    <img className="card-img-top" src={Easy} alt="Imagem de capa do card"/>
                    <div className="card-body">
                        <h5 className="card-title">Easy Weather</h5>
                        <p className="card-text">
                        Easy Weather is a React app that pulls weather information and 
                        displays tips about the weather condition of the day. 
                        Just type the name of the city and voilà!                     
                        </p>
                        <a href="https://easy-weather-wyncode.herokuapp.com" class="btn btn-outline-light">Click here</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Smart} alt="Imagem de capa do card"/>
                    <div className="card-body">
                        <h5 className="card-title">SmartAgenda</h5>
                        <p className="card-text">
                            SmartAgenda is a web application for business owners to keep track of client information
                            as well as appointments which are displayed on their calendar. 
                        </p>
                        <a href="https://smartagenda-wyncode.herokuapp.com" class="btn btn-outline-light">Click here</a>
                    </div>
                </div>
        </div>
        </div>
    )
}









export default Projects;