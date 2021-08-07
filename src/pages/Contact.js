import React from 'react';
import {Container} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactLinks from '../components/ContactLinks';

function Contact() {
  return <>
    <ContactForm />
    <hr />
    <Container className='text-center'>
      <h1>Or, reach out to me by email, phone, Linkedin, or Github</h1>
      <div className='w-100 d-flex justify-content-center my-3'>
        <ContactLinks />
      </div>
    </Container>
  </>;
}

export default Contact;
