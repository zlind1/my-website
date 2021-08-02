import React from 'react';
import {Row} from 'react-bootstrap';

function Education(props) {
  const {school, dates, description, info} = props.education;
  return (
    <Row>
      <h5 className='mr-3'>{school}</h5>
      <em>{description}</em>
      <ul>
        {info.map((item, i) =>
          <li key={i}>{item}</li>
        )}
      </ul>
    </Row>
  );
}

export default Education;
