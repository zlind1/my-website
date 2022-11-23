import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function ContactForm() {
  const history = useHistory();
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
    }).then(() => history.push('/thankyou')).catch(error => alert(error))
  }
  return <Container className='text-center mx-auto my-3'>
    <h1 className='my-5'>Or, you can fill out this form to send me a message here.</h1>
    <Form data-netlify='true' name='contact' onSubmit={submitForm} method='post'>
      <input type='hidden' name='form-name' value='contact' />
      <Form.Group className='text-left'>
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder='example@gmail.com' type='email'
          name='email' ref={email} required/>
      </Form.Group>
      <Form.Group className='text-left'>
        <Form.Label>Message</Form.Label>
        <Form.Control as='textarea' placeholder='Enter your message here'
          name='message' ref={message} required style={{height: '300px'}}/>
      </Form.Group>
      <Button type='submit' variant='secondary' className='mx-auto'>Send message</Button>
    </Form>
  </Container>;
}

export default ContactForm;
