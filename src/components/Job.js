import React from 'react';
import {Row} from 'react-bootstrap';

function Job(props) {
  const {title, company, location, dates, description} = props.job;
  return (
    <Row>
      <h5 className='mr-3'>{title}</h5>
      <em>{company}, {location} / {dates}</em>
      <ul>
        {description.map((description, i) =>
          <li key={i}>{description}</li>
        )}
      </ul>
    </Row>
  );
}

export default Job;
