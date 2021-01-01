import React, { Component } from 'react';
import { Navigation } from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App mw8 w-90 center">
        <Router> 
          <Navigation />
          <div className="pt3">
          <BaseRouter/>
          </div>
          <Footer/>
        </Router>
    
  </div>
  );
}
}

export default App;
