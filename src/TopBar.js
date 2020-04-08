import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopBar() {
  return (
    <Row className='bg-dark'>
    	  <Link to='/' as={Col} xs={3}>
    	    Home
    	  </Link>
    	  <Link to='/resume' as={Col} xs={3}>
    	    Resume
    	  </Link>
    	  <Link to='/portfolio' as={Col} xs={3}>
    	    Portfolio
    	  </Link>
    	  <Link to='/contact' as={Col} xs={3}>
    	    Contact
    	  </Link>
    </Row>
  );
}

export default TopBar;