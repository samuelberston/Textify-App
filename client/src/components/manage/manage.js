import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const Manage = ({ messages }) => (
  <div id="manage">
    <div id="messages">
      {messages.map((msg) => (
        <div id="message">
          <Message title={msg.title} />
        </div>
      ))}
    </div>
  </div>
);

Manage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Manage;
