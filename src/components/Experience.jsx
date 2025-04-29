// src/components/Experience.jsx
import React from 'react';
import '../styles/experience.css';
import { FaBriefcase, FaClock } from 'react-icons/fa'; // Font Awesome icons

const Experience = () => {
  return (
    <div className="experience">
      <h2>My Experience</h2>
      <div className="experience-grid">
        <div className="experience-item">
          <h3>Software Engineer at Company Group</h3>
          <p><span className="icon"><FaBriefcase /></span><strong>Role:</strong> Software Engineer</p>
          <p><span className="icon"><FaClock /></span><strong>Duration:</strong> Jan 2023 - Dec 2023</p>
        </div>
        {/* You can copy this block to add more cards manually */}
      </div>
    </div>
  );
};

export default Experience;
