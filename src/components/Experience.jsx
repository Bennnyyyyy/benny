// src/components/Experience.jsx
import React from 'react';
import '../styles/experience.css';
import { FaMapMarkerAlt, FaLink } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey since 2019</p>
          <div className="divider"></div>
        </div>
        
        <div className="experience-timeline">
          {/* Future Development */}
          <div className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <h3 className="experience-title">Future Development</h3>
              <ul className="experience-list">
                <li><span className="highlight"></span>Built customer portals using React/TypeScript for 50+ clients</li>
                <li><span className="highlight"></span>Developed Node.js/GraphQL backends with 40% faster response times</li>
                <li><span className="highlight"></span>Automated deployments reducing process from hours to minutes</li>
                <li><span className="highlight"></span>Mentored junior developers in best practices</li>
                <li><span className="highlight"></span>Optimized databases for 60% faster page loads</li>
              </ul>
            </div>
          </div>

          {/* Future Development */}
          <div className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <h3 className="experience-title">Future Development</h3>
              <ul className="experience-list">
                <li><span className="highlight"></span>Built customer portals using React/TypeScript for 50+ clients</li>
                <li><span className="highlight"></span>Developed Node.js/GraphQL backends with 40% faster response times</li>
                <li><span className="highlight"></span>Automated deployments reducing process from hours to minutes</li>
                <li><span className="highlight"></span>Mentored junior developers in best practices</li>
                <li><span className="highlight"></span>Optimized databases for 60% faster page loads</li>
              </ul>
            </div>
          </div>

          {/* Fullstack Developer */}
          <div className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <h3 className="experience-title">Fullstack Developer</h3>
              <p className="experience-company">Questionic Corporation</p>
              <ul className="experience-list">
                <li><span className="highlight"></span>Built React Native apps for 10+ daily users</li>
                <li><span className="highlight"></span>Developed Django backend handling 5+ daily registrations</li>
                <li><span className="highlight"></span>Reduced server costs by 30% via cloud optimization</li>
                <li><span className="highlight"></span>Implemented WebSocket for 45% engagement boost</li>
              </ul>
            </div>
          </div>
        </div>

        

        <div className="experience-footer">
          <div className="footer-content">
            <p className="footer-link">
              <FaLink className="icon" /> Follow us: Australia
            </p>
            <p className="footer-visit">Visit your website today</p>
            <p className="footer-location">
              <FaMapMarkerAlt className="icon" /> <em>Naked City, Philippines</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;