// src/components/Experience.jsx
import React from 'react';
import '../styles/experience.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My journey</p>
          <div className="divider"></div>
        </div>
        
        <div className="experience-timeline">
          {/* Project Manager - Smarty Hub */}
          <div className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-title">Project Manager</h3>
                <span className="experience-date">2024 - Present</span>
              </div>
              <p className="experience-company">Capstone Project - Smarty Hub</p>
              <ul className="experience-list">
                <li><span className="highlight"></span>Led a team of 5 developers in creating an educational platform for elementary students</li>
                <li><span className="highlight"></span>Coordinated between stakeholders, designers, and developers to ensure project alignment</li>
                <li><span className="highlight"></span>Implemented Agile methodologies with bi-weekly sprints and stand-up meetings</li>
                <li><span className="highlight"></span>Managed project timeline and deliverables, ensuring on-time completion</li>
                <li><span className="highlight"></span>Conducted user testing sessions and incorporated feedback into development</li>
              </ul>
            </div>
          </div>

          {/* Tester Experience */}
          <div className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-title">Tester</h3>
                <span className="experience-date">2023 - 2024</span>
              </div>
              <p className="experience-company">WMSU Dental Clinic Appointment System</p>
              <ul className="experience-list">
                <li><span className="highlight"></span>Tested and validated key features to ensure system stability and reliability</li>
                <li><span className="highlight"></span>Collaborated with developers to identify, document, and fix bugs</li>
                <li><span className="highlight"></span>Conducted usability testing to improve user experience</li>
                <li><span className="highlight"></span>Prepared test reports and feedback to support continuous improvements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-footer">
          <div className="footer-content">
            <p className="footer-location">
              <FaMapMarkerAlt className="icon" /> <em>Zamboanga City, Philippines</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;