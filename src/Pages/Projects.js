import React from 'react';
import "./Projects.css"

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit velit bibendum bibendum.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.example.com/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit velit bibendum bibendum.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.example.com/project2'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, velit velit bibendum bibendum.',
    image: 'https://via.placeholder.com/150',
    link: 'https://www.example.com/project3'
  }
];

const Projects = () => {
  return (
   <div className="conatiner">
     
      <div className='project-card'>
      <h2>Projects</h2>
      {projects.map(project => (
        <div key={project.id}>
        <h3>{project.title}</h3>
        <img className='project-card img' src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <a href={project.link}>View project</a>
        </div>
        ))}
        </div>
   </div>
     
      );
    };
    
    export default Projects;