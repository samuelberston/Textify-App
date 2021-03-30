import React from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';

const Contacts = ({ contacts }) => (
  <div id="contacts">
    {contacts.map((contact) => (
      <div id="contact">
        <Contact contact={contact} />
      </div>
    ))}
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf()).isRequired,
};

export default Contacts;
