import React from 'react';
import {Form, Button} from 'react-bootstrap';

function Contact() {
  function sendMessage(e) {
    e.preventDefault();
    console.log(email.current.value);
    console.log(message.current.value);
  }
  const email = React.useRef();
  const message = React.useRef();
  return <>
    <h1>Feel free to send me a message and we can chat.</h1>
    <Form onSubmit={sendMessage}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder='example@gmail.com' type='email' ref={email} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' placeholder='Enter your message here' ref={message} required/>
      </Form.Group>
      <Button type='submit'>Send message</Button>
    </Form>
  </>;
}

export default Contact;
