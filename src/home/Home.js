import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from '../home/home.css';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  clickedme = (e) => {
    alert(this.refs.myRef.value);
  }
  changedme=(e)=>{
    alert(e.target.value);
  }
  render() {
    return (
      <div>
        {/* <h1 className="App-title"><a href="/login">Login</a></h1> */}
        <select onChange={this.changedme}>
          <option>aa</option>
          <option>bb</option>
        </select>
        <input type="text" ref="myRef" /><input type="button" value="submit" onClick={this.clickedme} />
      </div>
    );
  }
}

export default Home;
