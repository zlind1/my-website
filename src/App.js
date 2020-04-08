import React from 'react';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';

import TopBar from './TopBar.js';

function App() {
  return (
    <Container fluid>
      <TopBar />
      <Route exact path='/'>
        home
      </Route>
      <Route exact path='/resume'>
        resume
      </Route>
      <Route exact path='/portfolio'>
        portfolio
      </Route>
      <Route exact path='/contact'>
        contact
      </Route>
    </Container>
  );
}

export default App;
