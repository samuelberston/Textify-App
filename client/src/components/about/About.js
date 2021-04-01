import React from 'react';

const About = () => (
  <div id="aboutContainer">
    <div id="aboutTitle">
      <h3>
        About
      </h3>
    </div>
    <div id="about">
      <p>
        Textify allows users to schedule automated text messages.
      </p>
      <p>
        Textify uses the Twilio API to send SMS messages and
        the node-cron library to schedule tasks.
      </p>
      <p>
        The front end is build with JavaScript and React.
      </p>
      <p>
        The back end is build with Nodejs, Express, and MySQL.
      </p>
    </div>
    <a id="gitHubLink" href="https://github.com/samuelberston/MVP" target="_blank" rel="noreferrer">
      <i className="fab fa-github" title="GitHub Icon" />
    </a>
  </div>
);

export default About;
