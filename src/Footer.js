import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FaLinkedin, FaGithub, FaPhone} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

function Footer() {
  let [rowHeight, setRowHeight] = React.useState(0);
  const row = React.createRef();
  function resetRowHeight() {
    setRowHeight(row.current.clientHeight);
  }
  React.useEffect(resetRowHeight, [row]);
  return <>
    <div style={{height: rowHeight}}></div>
    <Row className='bg-light text-dark w-100 py-3' style={{
      position: 'fixed',
      bottom: 0,
    }} ref={row}>
      <Col sm={6} className='d-flex justify-content-sm-start justify-content-center'>
        <p className='m-sm-0'>© 2021 by Zach Lind</p>
      </Col>
      <Col sm={6} className='d-flex justify-content-sm-end justify-content-center'>
        <a href='mailto:zacharywolfflind@gmail.com' target='_blank' rel='noopener noreferrer'>
          <FiMail size={24} color='black' className='mx-3'/>
        </a>
        <a href='tel:9259840473'>
          <FaPhone size={24} color='black' className='mx-3'/>
        </a>
        <a href='https://www.linkedin.com/in/zachary-lind-8b86101a1/'>
          <FaLinkedin size={24} color='black' className='mx-3'/>
        </a>
        <a href='https://github.com/zlind1'>
          <FaGithub size={24} color='black' className='mx-3'/>
        </a>
      </Col>
    </Row>
  </>;
}

export default Footer;
