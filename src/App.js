import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './login/Login.js';
import Home from './home/Home.js';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/login' render={() => (
            <Login/>
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
