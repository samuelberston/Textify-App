import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const {
    firstName, lastName, number, email,
  } = contact;
  return (
    <div id="contact">
      <div className="name">
        <i className="far fa-address-card" />
        &nbsp;
        {firstName}
        &nbsp;
        {lastName}
      </div>
      <div className="number">
        <i className="fas fa-phone" />
        &nbsp;
        {number}
      </div>
      <div className="email">
        <i className="far fa-envelope" />
        &nbsp;
        {email}
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Contact;
