import React, { Component } from "react";
import styles from "../contact/contact.css";
import ContactForm from "../contactform/contactform";
import Mapcomponent from "../Mapcomponent/Mapcomponent";
class Contact extends Component {
  render() {
    return (
      <div>
        <div className="leftpanel" ><ContactForm /></div>
       <div className="rightpanel"> <Mapcomponent /></div>
      </div>
    );
  }
}

export default Contact;
