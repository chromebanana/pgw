import React, { Component } from 'react';
import { Navigation } from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import './App.css';

const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const token = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN


class App extends Component {
  constructor() {
      super();
      this.state = {
        fields: '',
        includes: '',
      }

  }
      async componentDidMount() {
        let url = "https://cdn.contentful.com/spaces/"+space+"/environments/master/entries?access_token="+token+"&content_type=homePage";
        let response = await fetch(url);
        const homePage = await response.json();
        this.setState({ fields: homePage.items[0].fields, includes: homePage.includes });       
      }

  render() {
    const { fields, includes } = this.state

    return (
      <div className="w-100 pb4-ns"  id="background">
      <div className="App mw8 w-90-ms center ">
          <Router className=""> 
            <Navigation />
            <div className="WhiteFilter ba-ns b--black-20 br3-ns ph4-ns pt4-ns ph3 pv2 mt4-ns" >
            <BaseRouter fields={fields} includes={includes} />
            <Footer/>
            </div>
          </Router>
      </div>
    </div>
    );
  }
}

export default App;
