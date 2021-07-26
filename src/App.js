import React from 'react';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';

import TopBar from './TopBar.js';
import Home from './Home.js';
import Resume from './Resume.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

function App() {
  return <>
    <TopBar />
    <Container fluid>
      <Route exact path='/'>
        <Home />
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
      <Footer />
    </Container>
  </>;
}

export default App;
