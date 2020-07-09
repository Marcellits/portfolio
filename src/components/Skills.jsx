import React from 'react';
import JS from "../images/JS.png";
import React_logo from "../images/React_logo.png";
import MongoDB from "../images/MongoDB.png";
import Express from "../images/Express.png";
import Node from "../images/NodeJS.png";
import Mongoose from "../images/Mongoose.png";
import Bootstrap from "../images/Bootstrap.png";
import Ai from "../images/Ai.png"
import Ps from "../images/Ps.png"

const Skills = () => {

    return (
        <div id="skills" className="components">
            <h3 >SKILLS</h3>
            <p>
            Being trained as a Full Stack Web developer by Wyncode Academy, 
            I acquired extensive knowledge in Javascript and the React library for 
            creating dynamic user interfaces. In addition, I use libraries like Bootstrap 
            for manipulating and styling. Knowledge in database management using MongoDB 
            and to develop server structure for web applications, I use Express and Node.js. 
            Intermediate knowledge manipulating images and creating graphic designs.
            </p>
            <div class="container">
                <div class="row">
                    <div class="col-logos">
                        <img className="logos" src={JS} alt="Javascript Logo"/>
                    </div>
                    <div class="col-logos">
                        <img className="logos" src={React_logo} alt="React Logo"/>
                    </div>
                    <div class="col-logos">
                        <img className="logos" src={Express} alt="Express Logo"/>
                    </div>
                    <div class="col-logos">
                        <img className="logos" src={Node} alt="Node.js Logo"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-logos">
                        <img className="logos" src={MongoDB} alt="MongoDB Logo"/>
                    </div>
                    <div class="col-logos">
                        <img className="logos" src={Mongoose} alt="Mongoose Logo"/>
                    </div>
                    <div class="col-logos">
                        <img className="logos" src={Bootstrap} alt="Bootstrap Logo"/>  
                    </div>
                    <div class="col-logos">
                        <img className="logos " src={Ai} alt="Illustrator Logo"/>
                    </div>
                    <div class="col-logos">
                        <img className="logos" src={Ps} alt="Photoshop Logo"/>
                    </div>
        
                </div>
            </div>    
        </div>
    )
}









export default Skills;