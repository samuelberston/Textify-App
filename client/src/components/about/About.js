import React from 'react';

import github from './github.png';

const About = () => (
  <div id="aboutContainer">
    <div id="aboutTitle">
      <h3>
        About
      </h3>
    </div>
    <div id="about">
      <p>
        schedule automated text messages with Textify
      </p>
      <div id="gitHubLink">
        <img src={github} alt="" />
      </div>
    </div>
  </div>
);

export default About;
