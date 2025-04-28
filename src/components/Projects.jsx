// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Weekly Project 1',
    description: 'A description of project 1.',
    repoLink: 'https://github.com/project1',
    liveLink: 'https://project1.com'
  },
  {
    title: 'Weekly Project 2',
    description: 'A description of project 2.',
    repoLink: 'https://github.com/project2',
    liveLink: 'https://project2.com'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repository</a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
