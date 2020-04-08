import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {FaLinkedin, FaGithub, FaPhone} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

function Contact() {
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item>
        <FiMail size={48} className='mx-3'/>
        <a href='mailto:zlind@ucsc.edu' target='_blank' rel='noopener noreferrer'>zlind@ucsc.edu</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <FaPhone size={48} className='mx-3'/>
        <a href='tel:9259840473'>925 984 0473</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <FaLinkedin size={48} className='mx-3'/>
        <a href='https://www.linkedin.com/in/zachary-lind-8b86101a1/'>
          LinkedIn Profile
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <FaGithub size={48} color='black' className='mx-3'/>
        <a href='https://github.com/zlind1'>
          GitHub Profile
        </a>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Contact;