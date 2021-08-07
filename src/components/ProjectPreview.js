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
    <Row className={`bg-${color} py-3`} onClick={openProject}>
      <Col sm={9}>
        <h3>
          <span className='mr-3'>{title}</span>
          <br className='d-md-none'/>
          <span className='h5 text-muted'>{summary}</span>
        </h3>
      </Col>
      <Col sm>
        <span className='float-right'>
          Click to see more...
        </span>
      </Col>
    </Row>
  );
}

export default ProjectPreview;
