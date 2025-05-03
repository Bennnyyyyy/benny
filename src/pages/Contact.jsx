// src/pages/Contact.jsx
import React from "react";
import { FaEnvelope, FaPhone, FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import '../styles/contact.css';


const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Get In Touch</h1>
      <p>Feel free to reach out for collaborations or just a friendly hello!</p>

      <div className="contact-info">
        <div className="info-item">
          <FaEnvelope className="icon" />
          <a href="mailto:your-email@example.com">benladindinin0909@gmail.com</a>
        </div>
        <div className="info-item">
          <FaPhone className="icon" />
          <a href="tel:+1234567890">09670915862</a>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://x.com/Bennyyyyyys" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/benladin.dinin/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://github.com/Bennnyyyyy" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/benladin-mohammad-dinin-64aaa4340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Contact;
