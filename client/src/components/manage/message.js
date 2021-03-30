import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => (
  <div id="message">
    <div id="edit">
      <i className="fa fa-edit" type="button" />
    </div>
    <div id="title">
      {msg.title}
    </div>
    <div id="to">
      to: &nbsp;
      {msg.receiver}
    </div>
    <div id="text">
      {msg.text}
    </div>
  </div>
);

Message.propTypes = {
  msg: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Message;
