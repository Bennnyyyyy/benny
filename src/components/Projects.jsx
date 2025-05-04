// src/components/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/projects.css';

const projects = [
  {
    title: 'Pokemon Battle',
    description: 'Pokémon Mini Battle web app. Choose your Pokémon and engage in quick, turn-based battles with dynamic stats and abilities.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    image: '/project/poke.jpg', // Your image path
    repoLink: 'https://github.com/Bennnyyyyy/pokedex.git',
    liveLink: 'https://pokedexsitee.netlify.app/'
  },
  {
    title: 'Smarty Hub: Digitalize Learning Platform for  Elementary Students',
    description: 'Modern calculator with glassmorphism UI design featuring advanced mathematical functions.',
    tags: ['PHP', 'CSS3', 'HTML5'],
    image: '/project/smarty.jpg',
    repoLink: 'https://github.com/Ameeffy/DentalWmsuu.git',
    liveLink: 'https://smartyhub.site/'
    
  },

  {
    title: 'WMSU Dental Clinic Appointment System',
    description: 'A web-based appointment platform designed to streamline dental consultations for WMSU students and staff.',
    tags: ['Django', 'CSS3', 'HTML5'],
    image: '/project/dental.jpg',
    repoLink: 'https://github.com/Ameeffy/DentalWmsuu.git',
    
    
  },

  {
    title: 'Todo-List',
    description: 'A simple and responsive web-based Todo List app built to help users organize and manage daily tasks efficiently. It allows users to create, update, and delete tasks in real time, with a clean and intuitive interface for better productivity.',
    tags: ['Django', 'CSS3', 'HTML5'],
    image: '/project/todo.jpg',
    repoLink: 'https://github.com/Ameeffy/DentalWmsuu.git',
    
  }
  

  
  
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