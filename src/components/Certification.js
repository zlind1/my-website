import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Certification(props) {
  const {title, issuer, date, link, img} = props.certification;
  return (
    <Row>
      <Col xs={8}>
        <h5>{title}</h5>
        <em>{issuer} - {date}</em>
      </Col>
      <Col xs={4}>
        <a href={link}>
          <img height={100} src={img} href={link} alt=''/>
        </a>
      </Col>
    </Row>
  );
}

export default Certification;
