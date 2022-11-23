import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ContactLinks from './ContactLinks';

function Footer() {
  return (
    <Row className='bg-light text-dark mt-auto mx-0 w-100 p-3'>
      <Col sm={6} className='d-flex justify-content-sm-start justify-content-center p-0 order-sm-0 order-1'>
        <p className='m-sm-0 m-0 mt-2'>© 2022 by Zach Lind</p>
      </Col>
      <Col sm={6} className='d-flex justify-content-sm-end justify-content-center p-0 order-sm-1 order-0'>
        <ContactLinks size={24}/>
      </Col>
    </Row>
  );
}

export default Footer;
