import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ContactLinks from './ContactLinks';

function Footer() {
  return (
    <Row className='bg-light text-dark p-3 mt-auto'>
      <Col sm={6} className='d-flex justify-content-sm-start justify-content-center'>
        <p className='m-sm-0'>© 2021 by Zach Lind</p>
      </Col>
      <Col sm={6} className='d-flex justify-content-sm-end justify-content-center'>
        <ContactLinks />
      </Col>
    </Row>
  );
}

export default Footer;
