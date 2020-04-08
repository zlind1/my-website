import React from 'react';
import {Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopBar() {
  return (
    <Row className='bg-primary'>
    	  <Link to='/'>
    	    Home
    	  </Link>
    	  <Link to='/resume'>
    	    Resume
    	  </Link>
    	  <Link to='/portfolio'>
    	    Portfolio
    	  </Link>
    	  <Link to='/contact'>
    	    Contact
    	  </Link>
    </Row>
  );
}

export default TopBar;