import React from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';

function Skill(props) {
  const {title, subskills, rating} = props.skill;
  return (
    <Row>
      <Col md={5}>
        <h5>{title}</h5>
      </Col>
      <Col md={7}>
        <Row>
          <Col as='ul' className='mx-3'>
            {subskills.map((ss, i) => <li key={i}>{ss}</li>)}
          </Col>
          <Col className='p-3'>
            <ProgressBar variant='success' now={rating}/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Skill;
