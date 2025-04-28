// src/components/ProjectCard.jsx
import React from "react";

// Correct imports with unique variable names
import pic1 from './../assets/day1.jpg'; // First image
import pic2 from './../assets/day2.jpg'; // Second image

const ProjectCard = ({ project }) => {
  let imageSrc;

  // Assign correct image based on the project or any other logic
  if (project.thumbnail === "day1.jpg") {
    imageSrc = pic1;
  } else if (project.thumbnail === "day2.jpg") {
    imageSrc = pic2;
  }

  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <img src={imageSrc} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
};

export default ProjectCard;
