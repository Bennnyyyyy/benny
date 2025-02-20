import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import aboutImg from './../assets/about.jpg';
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <img src={aboutImg} alt="About Me" className="about-image"/>
      
      <div className="about-content">
        <h2>About Me</h2>
        <p>I am eager to know how technologies work and dedicated to exploring the technology world. Passion drives my learning, and I embrace innovation.</p>
        
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FaFacebook size={30} /> 
          </a>
          <a href="#" className="social-icon">
            <FaTwitter size={30} /> 
          </a>
          <a href="#" className="social-icon">
            <FaLinkedin size={30} /> 
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
