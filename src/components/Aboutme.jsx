import React from 'react';


const Aboutme = () => {

    return (
       <div className="aboutme">
           <h3 className="title"> ABOUT ME</h3>
                <div className="quote_Eisntein">
                    <h5 id="quote-text">
                    "The important thing is not to stop questioning. 
                    Curiosity has its own reason for existing.” 
                    </h5>
                    <h5 id="quote-author">Albert Einstein</h5> 
                </div>
                <div className="text-aboutme">
                    <p>
                    I always tried to understand the why of things, 
                    so curiosity opened my mind to explore new worlds and allowed me to 
                    acquire different types of knowledge. I’m the type of person who discusses arts 
                    and philosophy with friends and 5 minutes later buys a book about python language 
                    to start a new project.
                    </p>
                    <p>
                    My competition is only against me and because of this I’m constantly challenging 
                    myself and I never stop learning. For this reason, I became a Full Stack Web 
                    Developer with expertise in Javascript, React, MongoDB, Express and Node.js. 
                    I participated in projects such as the Easy Weather and Smart Agenda web applications 
                    and produced several other smaller personal projects. 
                    </p>
                    <p>
                    If you want to know more about me and my experience, 
                    take a look at my social medias right below.
                    </p>
                </div>
                
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a href="https://www.github.com/marcellits">
                            <i class="fa fa-github fa-3x" aria-hidden="true"/>
                        </a>
                        <a href="https://www.linkedin.com/in/marcellits/">
                            <i class="fa fa-linkedin-square fa-3x" aria-hidden="true" />
                        </a>    
                    </div>
                </div>
            </div>   
       </div>
    )
}

export default Aboutme;