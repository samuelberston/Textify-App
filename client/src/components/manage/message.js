import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ title }) => (
  <div id="message">
    <div id="title">
      {title}
    </div>
    <div id="edit">
      <input type="button" name="edit" value="edit" />
    </div>
  </div>
);

Message.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Message;
