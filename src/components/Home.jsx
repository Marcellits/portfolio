import React from 'react';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <header className="my_name_box App-header w-90pc p-15 flex items-center justify-start">    
        <div className="pattern-dots-md my_name_bg px-l5  max-w-20pc overflow-visible ml-5 md-ml-l5">
        </div>
        <div className="text_name_box">
          <h1 className="my_name_text">MARCELLA GARCIA</h1>
          <h1 className="web_dev">WEB DEVELOPER </h1>
        </div>
        <div className="submenu">
          <a href="#projects">PROJECTS</a>
          <span> | </span>
          <a href="#skills">SKILLS</a>
          <span> | </span>
          <a href="#contact">CONTACT</a>
        </div>
      </header>
      <section id="projects" className="projects">
        <Projects/>
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>  
  );
}

export default Home;
