import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import projects from '../data/projects.json';

function ProjectPreview(props) {
  const {id} = props;
  const color = (id % 2 === 0 ? 'white' : 'light');
  const history = useHistory();
  const {title, summary} = projects[id];
  function openProject() {
    history.push(`/projects/${id}`);
  }
  return (
    <Row className={`bg-${color}`} onClick={openProject}>
      <Col>
        <h1>{title}</h1>
      </Col>
      <Col>
        <p>{summary}</p>
      </Col>
    </Row>
  );
}

export default ProjectPreview;
