import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './login/Login.js';
import Home from './home/Home.js';
import Contact from './contact/contact.js';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/contact' render={() => (
            <Contact/>
          )} />
          <Route exact={true} path='/' render={() => (
            <Home/>
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
registerServiceWorker();
