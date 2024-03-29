import React from 'react';
import {FaLinkedin, FaGithub, FaPhone} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

function ContactLinks(props) {
  return <>
    <a href='mailto:zacharywolfflind@gmail.com' target='_blank' rel='noopener noreferrer'>
      <FiMail size={props.size} color='black' className='mx-3'/>
    </a>
    <a href='tel:9259840473'>
      <FaPhone size={props.size} color='black' className='mx-3'/>
    </a>
    <a href='https://linkedin.com/in/zlind1'>
      <FaLinkedin size={props.size} color='black' className='mx-3'/>
    </a>
    <a href='https://github.com/zlind1'>
      <FaGithub size={props.size} color='black' className='mx-3'/>
    </a>
  </>;
}

export default ContactLinks;
