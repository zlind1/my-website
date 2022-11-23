import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Home() {
  return (
    <Jumbotron>
      <h1>Zach Lind</h1>
      <h2>Game Developer, Web Designer, Software Engineer</h2>
      <div>
        <a href='/resume' className='mx-3'>Resume</a>
        <a href='/portfolio' className='mx-3'>Portfolio</a>
        <a href='/contact' className='mx-3'>Contact</a>
      </div>
    </Jumbotron>
  );
}

export default Home;
