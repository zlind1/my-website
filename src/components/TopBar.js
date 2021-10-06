import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../data/ZL.svg';

function TopBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Navbar.Brand href='/'>
        <img src={logo} style={{width: '1.5em'}} alt='logo'/>
        <div className='d-inline-block' style={{marginLeft: '1em'}}>
          Zach Lind
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav' className='ms-auto'>
        <Nav className='ms-auto'>
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
