import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function TopBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='/'>Zach Lind</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='/'>
            Home
          </Nav.Link>
          <Nav.Link href='/resume'>
            Resume
          </Nav.Link>
          <Nav.Link href='/portfolio'>
            Portfolio
          </Nav.Link>
          <Nav.Link href='/contact'>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
