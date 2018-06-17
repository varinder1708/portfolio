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
    $(el).slideDown();
  }
  render() {
    return (
      <div className="aboutme">
        {/* <h1>
                    Front-end Web Developer.
                </h1> */}
       
        <p ref="toggle" className="toggle">
          HI,<br /> I am Halifax, NS.<br /> Specializing in Website development.
          If you are a business seeking a web presence or an employer looking to
          hire, you can get in touch with me here.
        </p>
        <p className="buttons_cont">
          {" "}
          <a href="/contact" class="button_link red mr10" >
            I need a Website
          </a>
          <a class="button_link grey ml10" href="#">
            I am looking to Hire
          </a>
        </p>
      </div>
    );
  }
}

export default Aboutme;
