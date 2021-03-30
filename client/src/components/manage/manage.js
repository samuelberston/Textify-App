import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import AddMessage from './AddMessage';

const Manage = ({ messages }) => (
  <div id="manageContainer">
    <h3>
      Scheduled Texts
    </h3>
    <div id="messages">
      {messages.map((msg) => (
        <Message msg={msg} />
      ))}
      <AddMessage />
    </div>
  </div>
);

Manage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Manage;
