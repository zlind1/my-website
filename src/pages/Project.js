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
  const {title, description, summary, github, link} = projects[projectID];
  return (
    <Container className='p-3'>
      <Row>
        <h1>
          <span className='mr-3'>{title}</span>
          <br className='d-md-none'/>
          <span className='h5 text-muted'>{summary}</span>
        </h1>
      </Row>
      <Row className='my-3'>
        <p>{description}</p>
      </Row>
      <Row>
        <Col>
          {github && <p>
            View project on github: <a href={github}>{github}</a>
          </p>}
        </Col>
        <Col>
          {link && <p>
            View live project: <a href={link}>{link}</a>
          </p>}
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
