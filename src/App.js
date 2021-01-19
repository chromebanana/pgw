import React, { Component } from 'react';
import { Navigation } from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import './App.css';



class App extends Component {



  render() {
  return (
    <div className="w-100 pb4-ns"  id="background">
    <div className="App mw8 w-90-ms center ">
        <Router className=""> 
          <Navigation />
          <div className="WhiteFilter ba-ns b--black-20 br3-ns ph4-ns pt4-ns ph3 pv2 mt4-ns" >
          <BaseRouter/>
          <Footer/>
          </div>
        </Router>
    </div>
  </div>
  );
}
}

export default App;
