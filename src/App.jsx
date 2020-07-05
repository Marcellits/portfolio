import React from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      
        <Home />
        
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
