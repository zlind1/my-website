import React from 'react';
import {Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Container className='bg-primary'>
      <h1>Zach Lind</h1>
      <p>Software Engineer, Full Stack Web Developer, Game Designer</p>
      <FontAwesomeIcon icon={faKey} />
    </Container>
  );
}

export default App;
