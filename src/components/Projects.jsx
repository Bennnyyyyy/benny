// src/components/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/projects.css';

const projects = [
  {
    title: 'PixelMon',
    description: 'All-in-one Pokédex-Inspired web app. Explore detailed stats, abilities, and evolutions for every creature in the Pixelmon world.',
    tags: ['React', 'JavaScript', 'API'],
    image: '/project/day1.jpg', // Your image path
    repoLink: '#',
    liveLink: '#'
  },
  {
    title: 'Glasmorphism Calculator',
    description: 'Modern calculator with glassmorphism UI design featuring advanced mathematical functions.',
    tags: ['JavaScript', 'CSS3', 'HTML5'],
    image: '/project/cal.jpg',
    repoLink: '#',
    liveLink: '#'
  },
  // Add other projects following the same structure
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="image-overlay">
                  <a href={project.repoLink} className="icon-link repo-icon" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.liveLink} className="icon-link demo-icon" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;