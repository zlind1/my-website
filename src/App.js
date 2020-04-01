import React from 'react';
import {Container} from 'react-bootstrap';

import TopBar from './TopBar.js';

function App() {
  return (
    <>
    <TopBar />
      <Container className='bg-primary'>
        <h1>Zach Lind</h1>
        <p>Software Engineer, Full Stack Web Developer, Game Designer</p>
        
      </Container>
    </>
  );
}

export default App;
