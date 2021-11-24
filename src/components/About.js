import React from 'react';
import Parallax from 'react-rellax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
<div className="about-table">
<div>
<Parallax speed={ -1 }>
  <h2>ABOUT</h2>
 
  <div className="text">
  My name is Nikola Kovačević (Nick for short). Thank You for visiting my portfolio. I'm a Graphic designer, an aspiring Web developer, and a YouTube content creator.
  After several years of creating content on YouTube, and managing some websites I've decided to use my skills to provide my clients with professional, swift, and satisfying service while furthering my training and knowledge
  in all these areas. I'm opened for short-time work as well as long-term projects so feel free to contact me on any of these channels:
  <p>
  <br />
  <a href="mailto: nick_kova@yahoo.com"><FontAwesomeIcon icon={faEnvelope} size="2x"  /> E-mail: nick_kova@yahoo.com</a><br />
  <FontAwesomeIcon icon={faPhone} size="2x"  /> Phone: +385993831280<br />
  <a href="https://www.linkedin.com/in/nikola-kova%C4%8Devi%C4%87-745817192/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"  /> LinkedIn</a><br />
  <a href="https://github.com/Angelycus" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"  /> GitHub</a><br />
  <br />
  <br />
  <br />
  </p>
</div>

</Parallax>
</div>
</div>

    )
}

export default About;