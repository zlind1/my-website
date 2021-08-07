import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Education(props) {
  const {school, dates, description, info} = props.education;
  return (
    <Row>
      <Col xs={12}>
        <h5 className='mr-3'>{school}</h5>
        <em>{description} / {dates}</em>
      </Col>
      <Col xs={12}>
        <ul>
          {info.map((item, i) =>
            <li key={i}>{item}</li>
          )}
        </ul>
      </Col>
    </Row>
  );
}

export default Education;
