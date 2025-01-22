import React from 'react';
import './Project.css'; 

const Project = () => {
  const projects = [
    {
      name: 'AI',
      description: 'Developed an AI application.',
      link: 'https://capstone-ai.streamlit.app/'
    },
    
    {
      name: 'Portfolio Website',
      description: 'Created a personal portfolio website using React.js and CSS. Showcases my projects, skills, and contact information.',
      link: 'https://sukhmani.github.io/ResumeReact/'
    }
  ];

  return (
    <div className="project-container">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default Project;
