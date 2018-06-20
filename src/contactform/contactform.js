import React, { Component } from "react";
import styles from "../contactform/contactform.css";

class ContactForm extends Component {
  render() {
    return (
      <div class="contactform_cont">
        <div className="contact_txt">Contact Me</div>
        <form>
          <input
            autocomplete="off"
            className="name mr10"
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            autocomplete="off"
            className="email ml10"
            name="email"
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            autocomplete="off"
            className="subject"
            name="subject"
            type="text"
            placeholder="Subject"
          />
          <br />
          <textarea name="message" className="message" placeholder="Message" />
          <br />
          <br />
          <input type="submit" class="btn_small" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
