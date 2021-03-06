import React from 'react';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function Home() {

  /*HOME ANIMATION*/
  

  document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "< html >", "< style >", "< script >"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("#home_animation").innerHTML = text.substring(0, i+1) +'<span id="span-animation" aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 4000);
       }else if(i < (dataText[i].length)) { // check if dataText[i] exists
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }else{
        StartTextAnimation(0);
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  return (
    <div>
      <header className="App-header"> 
      <div id= "bg-animation-box">
        <h1 id="home_animation">Hello!</h1> 
      </div>   
         
        <div className="text_name_box">
          <h1 className="my_name_text"> Marcella Garcia</h1>
          <h2 className="web_dev"> Full Stack Web Developer </h2>
        </div>
        <div className="submenu">
          <div>
            <a className="submenu-name" href="#projects"> PROJECTS </a>
          </div>
          <div>
            <a className="submenu-name" href="#skills"> SKILLS </a>
          </div>
          <div>
            <a className="submenu-name" href="#contact"> CONTACT </a>
          </div>
          
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
