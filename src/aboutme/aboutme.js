import React, { Component } from 'react';
import styles from '../aboutme/aboutme.css';

class Aboutme extends Component {
    render() {
        return (
            <div className="aboutme">
                <h1>
                    Front-end Web Developer.
                </h1>
                <p>
                    Based out of Halifax, NS. Specializing in Website development. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.
                </p>
                <p className="buttons_cont">   <a class="button_link red mr10" href="#" >I need a Website</a>
                <a class="button_link grey ml10" href="#" >I am looking to Hire</a>
                </p>
            </div>
        );
    }
}

export default Aboutme;
