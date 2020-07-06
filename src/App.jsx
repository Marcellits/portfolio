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
    <div className="App">
      <Router>
        < Navbar/>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/aboutme" component={Aboutme}>
          </Route>
        </Switch>
      </Router> 
    <footer className="footer">
        <span class="text-muted">© 2020 Marcella Garcia</span>
    </footer>
    </div>   
    </>
  )}

export default App;
