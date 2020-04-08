import React from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';

function Resume() {
  return (
    <>
      <Row className='bg-light p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Work Experience</h2>
        </Col>
        <Col sm={8}>
          <Row>
            <h5 className='mr-3'>Software Engineering Intern</h5>
            <em>Infinite Options LLC, San Jose / March 2020 - Present</em>
            <ul>
              <li>Front-end development in ReactJS</li>
              <li>Worked in a team to design and deploy a website</li>
            </ul>
          </Row>
          <Row>
            <h5 className='mr-3'>Courtesy Clerk</h5>
            <em>Sprouts Farmers Market, San Ramon CA / June 2018 - September 2018</em>
            <ul>
              <li>Bagged groceries, returned shopping carts, cleaned store</li>
              <li>Summer job between quarters</li>
            </ul>
          </Row>
          <Row>
            <h5 className='mr-3'>Team Trainer</h5>
            <em>Taco Bell, Danville CA / March 2016 - June 2017</em>
            <ul>
              <li>Cooked, cleaned, took orders, trained new members</li>
              <li>First job in high school</li>
            </ul>
          </Row>
        </Col>
      </Row>
      <Row className='p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Skills</h2>
        </Col>
        <Col sm={8}>
          <Row>
            <Col md={5}>
              <h5>Python</h5>
            </Col>
            <Col md={7}>
              <Row>
                <Col as='ul' className='mx-3'>
                  <li>Numpy</li>
                  <li>Pygame</li>
                  <li>Flask</li>
                  <li>Tensorflow</li>
                </Col>
                <Col className='p-3'>
                  <ProgressBar variant='success' now={95}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <h5>HTML5/CSS3</h5>
            </Col>
            <Col md={7}>
              <Row>
                <Col as='ul' className='mx-3'>
                  <li>Vanilla</li>
                  <li>Bootstrap</li>
                </Col>
                <Col className='p-3'>
                  <ProgressBar variant='warning' now={75}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <h5>JavaScript</h5>
            </Col>
            <Col md={7}>
              <Row>
                <Col as='ul' className='mx-3'>
                  <li>Vanilla</li>
                  <li>ReactJS</li>
                  <li>AngularJS</li>
                  <li>Web APIs</li>
                </Col>
                <Col className='p-3'>
                  <ProgressBar variant='warning' now={75}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='bg-light p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Education</h2>
        </Col>
        <Col sm={8}>
          <Row>
            <h5 className='mr-3'>University of Califonia, Santa Cruz</h5>
            <em>B.S. in Computer Science expected June 2021</em>
            <ul>
              <li>Minor in Computer Engineering</li>
              <li>Algorithms, Advanced Programming, Machine Learning, Quantum Computing</li>
            </ul>
          </Row>
          <Row>
            <h5 className='mr-3'>Monte Vista High School</h5>
            <em>Graduated June 2017 with 3.8 GPA</em>
            <ul>
              <li>Member of school choir 4 years</li>
              <li>AP Java</li>
            </ul>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Resume;