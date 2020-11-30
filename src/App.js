import React, { Component } from 'react';
import { Navigation } from './components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import './App.css';
import pgwinit from './images/pgw-initial.png';


class App extends Component {
  render() {
  return (
    <div className="App mw7 w-90 center">
        <Router> 
          <Navigation />
          <BaseRouter/>
	<footer className="tc mt3 pv4 mt4 bt b--black-20">

	<img class="w-20" alt="pgw"src={pgwinit}/>

	</footer>

        </Router>
    
  </div>
  );
}
}

export default App;
