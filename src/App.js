import React, { Component } from 'react';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './login/Login.js';
import Home from './home/Home.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact={true} path='/login' render={() => (
            <Login/>
          )} />
          <Route exact={true} path='/home' render={() => (
            <Home/>
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
