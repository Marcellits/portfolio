import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, my name is Marcella Garcia and I am a web developer.
        </p>
      </header>
      <div className="projects">
        <Projects/>
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Contact />>
      </div>
    </div>
  );
}

export default App;
