import React from 'react';
import {Form, Button} from 'react-bootstrap';

function Contact() {
  const email = React.useRef();
  const message = React.useRef();
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  function submitForm(e) {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': e.target.getAttribute('name'),
        'email': email.current.value,
        'message': message.current.value
      })
    }).then(() => console.log('form submitted')).catch(error => alert(error))
  }
  return <>
    <h1>Feel free to send me a message and we can chat.</h1>
    <Form data-netlify='true' name='contact' onSubmit={submitForm} method='post'>
      <input type='hidden' name='form-name' value='contact' />
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder='example@gmail.com' type='email'
          name='email' ref={email} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' placeholder='Enter your message here'
          name='message' ref={message} required/>
      </Form.Group>
      <Button type='submit'>Send message</Button>
    </Form>
  </>;
}

export default Contact;
