import React from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';

function Skill(props) {
  const {title, rating} = props.skill;
  const variant = (
    rating >= 75 ? 'success' :
    rating >= 40 ? 'warning' :
    'danger'
  );
  return (
    <Row className='my-3'>
      <Col>
        <h5 className='m-0'>{title}</h5>
      </Col>
      <Col>
        <ProgressBar variant={variant} now={rating} className='h-100'/>
      </Col>
    </Row>
  );
}

export default Skill;
