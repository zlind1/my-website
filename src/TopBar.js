import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopBar() {
  return (
    <Row className='bg-dark'>
    	  <Link to='/' as={Col}>
    	    Home
    	  </Link>
    	  <Link to='/resume' as={Col}>
    	    Resume
    	  </Link>
    	  <Link to='/portfolio' as={Col}>
    	    Portfolio
    	  </Link>
    	  <Link to='/contact' as={Col}>
    	    Contact
    	  </Link>
    </Row>
  );
}

export default TopBar;