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
        <div id="skills">
            <h2 >SKILLS</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non quam vel odio dapibus euismod. 
            Duis at tempor tellus. Nulla consectetur augue quis eleifend aliquam. Aliquam vestibulum nisi sed nunc convallis, 
            vel lobortis eros tempus. Nunc nec dui nec turpis lacinia rhoncus sit amet a dui. Duis efficitur feugiat blandit. 
            Integer sodales vulputate diam sed iaculis. Integer ultricies rhoncus ante at facilisis. 
            Mauris tristique, orci id commodo rutrum, mauris turpis suscipit ex, 
            sed congue ipsum ipsum maximus dui. Nam nisi sem, pretium non placerat auctor, venenatis at odio.
            </p>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img className="logos" src={JS} alt="Javascript Logo"/>
                    </div>
                    <div class="col">
                        <img className="logos" src={React_logo} alt="React Logo"/>
                    </div>
                    <div class="col">
                        <img className="logos" src={Bootstrap} alt="Bootstrap Logo"/>  
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <img className="logos" src={Express} alt="Express Logo"/>
                    </div>
                    <div class="col">
                        <img className="logos" src={Node} alt="Node.js Logo"/>
                    </div>
                    <div class="col">
                        <img className="logos" src={MongoDB} alt="MongoDB Logo"/>
                    </div>
                </div>    
                <div class="row">
                    <div class="col">
                        <img className="logos" src={Mongoose} alt="Mongoose Logo"/>
                    </div>
                    <div class="col">
                        <img className="logos" src={Ai} alt="Illustrator Logo"/>
                        <img className="logos" src={Ps} alt="Photoshop Logo"/>
                    </div>
                </div>
            </div>    
        </div>
    )
}









export default Skills;