import React from 'react';
import {Row} from 'react-bootstrap';

function Certification(props) {
  const {title, issuer, date, link, img} = props.certification;
  return (
    <Row>
      <h5>{title} - {issuer}</h5>
      <em className='mx-3'>{date}</em>
      <a href={link}>
        <img height={200} src={img} href={link} alt=''/>
      </a>
    </Row>
  );
}

export default Certification;
