import React from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';
import AddContact from './AddContact';

const Contacts = ({ contacts }) => {
  console.log('cs', contacts);
  return (
    <div id="contactsContainer">
      <h3>
        Contacts
      </h3>
      <div id="contacts">
        {contacts.map((contact) => (
          <Contact contact={contact} />
        ))}
        <AddContact />
      </div>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contacts;
