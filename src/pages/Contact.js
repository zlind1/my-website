import React from 'react';
import {Container} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactLinks from '../components/ContactLinks';

function Contact() {
  return <>
    <Container className='text-center mt-5'>
      <h1>You can reach out to me by email, phone, Linkedin, or Github</h1>
      <div className='w-100 d-flex justify-content-center my-5'>
        <ContactLinks size={48}/>
      </div>
      <hr className='my-5'/>
    </Container>
    <ContactForm />
  </>;
}

export default Contact;
