import React from 'react';
import {Form, Button} from 'react-bootstrap';

function Contact() {
  function submitForm() {
    alert('Thanks for reaching out, I\'ll get in touch in the next couple days.');
  }
  return <>
    <h1>Feel free to send me a message and we can chat.</h1>
    <Form data-netlify='true' name='contact' onSubmit={submitForm}>
      <input type='hidden' name='form-name' value='contact' />
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder='example@gmail.com' type='email' name='email' required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' placeholder='Enter your message here' name='message' required/>
      </Form.Group>
      <Button type='submit'>Send message</Button>
    </Form>
  </>;
}

export default Contact;
