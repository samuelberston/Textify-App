import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ title }) => (
  <div id="message">
    <div id="title">
      {title}
    </div>
    <div>
      <input type="radio" name="edit" />
    </div>
  </div>
);

Message.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Message;
