import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from '../home/home.css';
import Header from '../header/header';
import Footer from '../footer/footer';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <div>Homepage</div>
        <Footer />
      </div>
    );
  }
}

export default Home;
