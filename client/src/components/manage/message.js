import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => (
  <div id="message">
    <div id="edit">
      <i className="fas fa-grip-vertical" />
    </div>
    <div id="messageData">
      <div id="title">
        {msg.title}
      </div>
      <div id="to">
        <span>to &nbsp;</span>
        {msg.receiver}
      </div>
      <div id="text">
        {msg.text}
      </div>
    </div>
  </div>
);

Message.propTypes = {
  msg: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Message;
