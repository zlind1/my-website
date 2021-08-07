import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ContactLinks from './ContactLinks';

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
        <ContactLinks />
      </Col>
    </Row>
  </>;
}

export default Footer;
