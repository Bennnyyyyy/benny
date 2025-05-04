import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm passionate about how technology shapes our world, and I'm driven by a deep curiosity to understand how things work—both behind the scenes in code and through the design that connects people to digital experiences. I embrace innovation and continuously seek to learn and grow in this fast-paced tech landscape.
          </p>
          
          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <FaHtml5 className="skill-icon" />
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <FaCss3Alt className="skill-icon" />
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <FaJs className="skill-icon" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <FaReact className="skill-icon" />
                <span>React JS</span>
              </div>
              <div className="skill-item">
                <SiCanva className="skill-icon" />
                <span>Canva</span>
              </div>
              <div className="skill-item">
                <FaGithub className="skill-icon" />
                <span>GitHub</span>
              </div>
            </div>
          </div>

          <a
            href="https://www.canva.com/design/DAGZ_WKjSGU/idAl29pvuVFU3Cf14JFJvQ/edit?utm_content=DAGZ_WKjSGU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv-btn"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;