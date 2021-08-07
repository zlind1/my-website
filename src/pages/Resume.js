import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Job from '../components/Job';
import Education from '../components/Education';
import Skill from '../components/Skill';
import Certification from '../components/Certification';
import ResumeViewer from '../components/ResumeViewer';
import jobs from '../data/jobs.json';
import educations from '../data/educations.json';
import skills from '../data/skills.json';
import certifications from '../data/certifications.json';

function Resume() {
  return (
    <>
      <Row className='bg-light p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Work Experience</h2>
        </Col>
        <Col sm={8}>
          {jobs.map((j, i) => <Job job={j} key={i}/>)}
        </Col>
      </Row>
      <Row className='p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Education</h2>
        </Col>
        <Col sm={8}>
          {educations.map((e, i) => <Education education={e} key={i}/>)}
        </Col>
      </Row>
      <Row className='bg-light p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Skills</h2>
        </Col>
        <Col sm={8}>
          {skills.map((s, i) => <Skill skill={s} key={i}/>)}
        </Col>
      </Row>
      <Row className='p-3'>
        <Col sm={4} className='pb-3'>
          <h2>Certifications</h2>
        </Col>
        <Col sm={8}>
          {certifications.map((c, i) => <Certification certification={c} key={i}/>)}
        </Col>
      </Row>
      <Row className='bg-light p-3'>
        <ResumeViewer />
      </Row>
    </>
  );
}

export default Resume;
