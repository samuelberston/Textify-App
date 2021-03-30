import React from 'react';
import axios from 'axios';

class AddContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.postContact = this.postContact.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  postContact(e) {
    e.preventDefault();
    axios.post('/contacts', this.state)
      .catch((err) => { throw err; });
  }

  render() {
    return (
      <div id="addContactModal">
        Add Contact
        <form id="addContactForm" onSubmit={this.postContact}>
          <input id="firstName" type="text" placeholder="first name" onChange={this.handleChange} />
          <input id="lastName" type="text" placeholder="last name" onChange={this.handleChange} />
          <input id="number" type="number" onChange={this.handleChange} />
          <input id="email" type="email" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddContactModal;
