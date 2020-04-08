import React from 'react';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';

import TopBar from './TopBar.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

function App() {
  return (
    <Container fluid>
      <TopBar />
      <Route exact path='/'>
        home
      </Route>
      <Route exact path='/resume'>
        <Resume />
      </Route>
      <Route exact path='/portfolio'>
        portfolio
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </Container>
  );
}

export default App;
