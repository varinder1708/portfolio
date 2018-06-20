import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "../aboutme/aboutme.css";
import $ from "jquery";

class Aboutme extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this.refs.toggle);
    const em = ReactDOM.findDOMNode(this.refs.text);
    $(el).slideDown();

  
  // text expand animation
    $(function() {
      var text = $(em);
     setTimeout(()=>{    text.removeClass("hidden");},1000);
    });
  
  
  
  }
  render() {
    return (
      <div className="aboutme">
        {/* <h1>Front-end Web Developer.</h1> */}

        <p ref="toggle" className="toggle">
          
            <div className="mb14"> HI,</div>
            <ul className="text hidden" ref="text">
              <li>I</li>
              <li className="spaced">A</li>
              <li className="ghost">M</li>
              <li className="spaced">D</li>
              <li className="ghost">e</li>
              <li className="ghost">s</li>
              <li className="ghost">i</li>
              <li className="ghost">g</li>
              <li className="ghost">n</li>
              <li className="spaced">N</li>
              <li className="ghost">e</li>
              <li className="ghost">t</li>
              <li className="ghost">w</li>
              <li className="ghost">o</li>
              <li className="ghost">r</li>
              <li className="ghost">k</li>
            </ul>
            <div>asd asd asdf asdf asdfasd asdas asd sd.</div>
          
        </p>
        <p className="buttons_cont">
          
          <a href="/contact" class="button_link red mr10">
            aaaaaaaaaaaaa
          </a>
          <a class="button_link grey ml10" href="#">
            bbbbbbbb
          </a>
        </p>
      </div>
    );
  }
}

export default Aboutme;
