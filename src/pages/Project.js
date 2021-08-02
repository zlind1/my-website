import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProjectNotFound from '../pages/ProjectNotFound';
import projects from '../data/projects.json';

function Project(props) {
  const {match} = props;
  const projectID = match.params.id;
  if (projectID < 0 || projectID >= projects.length) {
    return <ProjectNotFound />
  }
  const {title, description, summary, github} = projects[projectID];
  return (
    <Container>
      <Row>
        <h1>{title}</h1>
        <p>{summary}</p>
        <p>{description}</p>
        {github ? <a href={github}>View project on Github</a> : ''}
      </Row>
    </Container>
  );
}

export default Project;
