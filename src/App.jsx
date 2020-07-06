import React from 'react';
import './App.css';
import Home from './components/Home';

import Aboutme from './components/Aboutme';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        < Navbar/>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <Home />
            </header>  
          </Route>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
        </Switch>
      </div>
    </Router>    
    </>
  )}

export default App;
