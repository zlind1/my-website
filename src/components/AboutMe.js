import React from 'react';
import {Container} from 'react-bootstrap';

function AboutMe() {
  return <Container>
    <h1 className='my-3 text-center'>About me</h1>

    <p style={{textIndent: 50}}>
      Hi there! My name is Zach Lind and I'm a new graduate out of UC Santa Cruz
      with a Bachelor's in Computer Science. I'm looking for full-time jobs as a
      Software Engineer in the Bay Area. Please have a look through my
      <a href='/resume'> resume</a> and
      <a href='/portfolio'> portfolio </a>
      and feel free to
      <a href='/contact'> contact </a>
      me with any questions, comments, or concerns you may have.
    </p>
    <p style={{textIndent: 50}}>
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
    <p style={{textIndent: 50}}>
      In my free time I enjoy playing and creating video games, watching tutorials
      on YouTube, and attempting to recreate applications and websites I use frequently.
      My favorite programming languages are Java, Python, and JavaScript, and I am
      passionate about UI design and web development as a whole. Ideally I will move
      into the game development field once I have more experience, and am considering
      getting my Master's in Computer Science.
    </p>
    <p style={{textIndent: 50}}>
      In addition to coding, I am very passionate about music. I was a member of my school
      choir for 4 years, as well as the barbershop quartet and acapella groups.
      As the bass section leader, I led our choir to win the Golden State competition,
      where we placed #1 out of all choirs in California 3 years in a row. I have also
      played piano from a young age, starting piano lessons at age 9. Learning to read
      sheet music helped me excel in my choir, and inspired me to love music. I went
      on to join a band in middle and high school, where I sang and played keyboards.
      I began to learn guitar later on in high school, and have come to love that instrument
      as well, learning to play chords and attempting to learn solos and riffs from my
      favorite songs.
    </p>
  </Container>;
}

export default AboutMe;
