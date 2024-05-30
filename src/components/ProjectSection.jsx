import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectItems from '../assets/ProjectItems';

export default class ProjectSection extends Component {
  render() {
    return (
      <div className="py-5" id="project">
        <div className="container">
          <h2 className="mb-5">My project</h2>
          <div className="row g-4">
            {ProjectItems.map((project) => (
              <ProjectCard
                key={project.id}
                projectImage={project.projectImg}
                projectName={project.projectTitle}
                projectDesc={project.projectDescription}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

