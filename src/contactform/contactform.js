import React, { Component } from "react";
import styles from "../contactform/contactform.css";

class ContactForm extends Component {
  render() {
    return (
      <div class="contactform_cont">
        <div className="contact_txt">Contact Me</div>
        <form><ul>
          <li className="name mr10"><input
            autocomplete="off"
            
            name="name"
            type="text"
            placeholder="Name"
          />
          <span class="awsome_input_border"/></li>
          <li className="email ml10">
          <input
            autocomplete="off"
            
            name="email"
            type="text"
            placeholder="Email"
          /> <span class="awsome_input_border"/>
          </li>
          <li   className="subject">
          <input
            autocomplete="off"
          
            name="subject"
            type="text"
            placeholder="Subject"
          /> <span class="awsome_input_border"/>
          </li>
          <li className="message">
          <textarea name="message"  placeholder="Message" />
          <span class="awsome_input_border"/>
          </li>
          </ul>
         
          <input type="submit" class="btn_small" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
