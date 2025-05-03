import React from 'react';
import aboutImg from './../assets/about.jpg';
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am eager to know how technologies work and dedicated to exploring the technology world.
            Passion drives my learning, and I embrace innovation.
          </p>
          <a
            href="https://example.com/your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv-btn"
          >
            Download CV
          </a>
        </div>

        <div className="image-wrapper">
          <div className="image-3d-container">
            <img src={aboutImg} alt="About Me" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
