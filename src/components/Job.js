import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Job(props) {
  const {title, company, location, dates, description} = props.job;
  return (
    <Row>
      <Col xs={12}>
        <h5 className='mr-3'>{title}</h5>
        <em>{company}, {location} / {dates}</em>
      </Col>
      <Col xs={12}>
        <ul>
          {description.map((description, i) =>
            <li key={i}>{description}</li>
          )}
        </ul>
      </Col>
    </Row>
  );
}

export default Job;
