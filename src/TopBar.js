import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopBar() {
  return (
    <Row className='bg-dark d-flex justify-content-between py-3'>
    	<Col xs={3} className='d-flex justify-content-center'>
	    	<Link to='/'>
	    	  Home
	    	</Link>
    	</Col>
    	<Col xs={3} className='d-flex justify-content-center'>
	    	<Link to='/resume'>
	    	  Resume
	    	</Link>
    	</Col>
    	<Col xs={3} className='d-flex justify-content-center'>
	    	<Link to='/portfolio'>
	    	  Portfolio
	    	</Link>
    	</Col>
    	<Col xs={3} className='d-flex justify-content-center'>
	    	<Link to='/contact'>
	    	  Contact
	    	</Link>
    	</Col>
    </Row>
  );
}

export default TopBar;