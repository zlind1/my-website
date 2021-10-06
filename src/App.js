import React from 'react';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';

import TopBar from './components/TopBar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';

function App() {
  return <>
    <TopBar />
    <Container fluid>
      <Route exact path='/' component={Home} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/projects/:id' component={Project} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/thankyou' component={ThankYou} />
    </Container>
    <Footer />
  </>;
}

export default App;
