import React from 'react';
import {Button} from 'react-bootstrap';
import resume from '../data/resume.pdf';

function ResumeViewer() {
  return (
    <div className='w-100 text-center'>
      <Button variant='outline-dark' href={resume} target='_blank' rel='noopener noreferrer'>
        Open Resume PDF
      </Button>
    </div>
  );
}

export default ResumeViewer;
