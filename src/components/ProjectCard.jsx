// src/components/Projects.jsx
import React from 'react';
import '../styles/projects.css'; // Make sure to create this CSS file

const projects = [
  {
    title: 'Weekly Project 1',
    description: 'A description of project 1.',
    repoLink: 'https://github.com/project1',
    liveLink: 'https://project1.com',
    tags: ['React', 'CSS', 'API'] // Added tags for better organization
  },
  {
    title: 'Weekly Project 2',
    description: 'A description of project 2.',
    repoLink: 'https://github.com/project2',
    liveLink: 'https://project2.com',
    tags: ['Node.js', 'Express', 'MongoDB']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
                
                <div className="project-links">
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn repo-link"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn live-link"
                  >
                    Live Demo
                  </a>
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