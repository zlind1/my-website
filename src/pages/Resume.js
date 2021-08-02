import React from 'react';
import {Row, Col, ProgressBar} from 'react-bootstrap';
import Skill from '../components/Skill';
import Job from '../components/Job';
import Education from '../components/Education';
import Certification from '../components/Certification';
import skills from '../data/skills.json';
import jobs from '../data/jobs.json';
import educations from '../data/educations.json';
import certifications from '../data/certifications.json';

function Resume() {
  return (
    <>
      <Row className='bg-light p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Work Experience</h2>
        </Col>
        <Col sm={8}>
          {jobs.map((job) => <Job job={job} />)}
        </Col>
      </Row>
      <Row className='p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Skills</h2>
        </Col>
        <Col sm={8}>
          {skills.map((skill) => <Skill skill={skill} />)}
        </Col>
      </Row>
      <Row className='bg-light p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Education</h2>
        </Col>
        <Col sm={8}>
          {educations.map((education) => <Education education={education} />)}
        </Col>
      </Row>
      <Row className='p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Certifications</h2>
        </Col>
        <Col sm={8}>
          {certifications.map((certification) => <Certification certification={certification} />)}
        </Col>
      </Row>
    </>
  );
}

export default Resume;
