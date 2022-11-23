import React from 'react';
import {Container, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function ThankYou() {
  const history = useHistory();
  return <Container>
    <h1>
      Thanks for reaching out! I'll be in contact with the email address
      you provided within the next few days.
    </h1>
    <Button onClick={() => history.push('/')} variant='secondary' >
      Return to homepage
    </Button>
  </Container>;
}

export default ThankYou;
