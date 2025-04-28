// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
      <div>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Add more social media links as needed */}
      </div>
    </div>
  );
};

export default Contact;
