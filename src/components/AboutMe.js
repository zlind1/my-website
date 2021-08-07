import React from 'react';
import {Container} from 'react-bootstrap';

function AboutMe() {
  return <Container>
    <h1 className='my-3'>About me</h1>
    <p>
      Hi there! My name is Zach Lind and I'm a new graduate out of UC Santa Cruz
      with a Bachelor's in Computer Science. I'm looking for full-time jobs as a
      Software Engineer in the Bay Area. Please have a look through my resume and
      portfolio and feel free to contact me with any questions, comments, job offers.
    </p>
    <p>
      Growing up, I always loved computers, from videogames to paint editors,
      and I had always wondered how they were made. In middle school I went to
      a game development summer camp, in which we used GameMaker to create games.
      This was the most fun I'd had, and I loved being able to play a game that I
      made myself. From this point on, I loved learning how games were made, watching
      videos on YouTube to learn basic C++ and Javascript. In high school, I took
      the AP Java class, and was able to get an Oracle certification in Java SE7.
      Throughout my college experience, I learned many coding languages, from
      Assembly to C to Python. I enjoyed learning the differences to each one, and
      still enjoy learning new languages when I can.
    </p>
  </Container>;
}

export default AboutMe;
