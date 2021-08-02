import React from 'react';
import ProjectPreview from '../components/ProjectPreview';
import projects from '../data/projects.json';

function Portfolio() {
  return <>
    {projects.map((_, i) => (
      <ProjectPreview id={i} key={i}/>
    ))}
  </>;
}

export default Portfolio;
