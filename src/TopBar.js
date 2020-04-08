import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopBar() {
  return (
    <Row className='bg-dark'>
    	<Col xs={3}>
	    	<Link to='/'>
	    	  Home
	    	</Link>
    	</Col>
    	<Col xs={3}>
	    	<Link to='/resume'>
	    	  Resume
	    	</Link>
    	</Col>
    	<Col xs={3}>
	    	<Link to='/portfolio'>
	    	  Portfolio
	    	</Link>
    	</Col>
    	<Col xs={3}>
	    	<Link to='/contact'>
	    	  Contact
	    	</Link>
    	</Col>
    </Row>
  );
}

export default TopBar;