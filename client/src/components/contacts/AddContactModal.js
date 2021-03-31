import React from 'react';
import PropTypes from 'prop-types';
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
    const { clicked } = this.props;
    return (
      <div id="addContactModal" className={`modal ${clicked ? 'modalShow' : ''}`}>
        Add Contact
        <form id="addContactForm" onSubmit={this.postContact}>
          <label>
            <i className="far fa-address-card" />
            <input id="firstName" type="text" placeholder="first name" onChange={this.handleChange} />
            <input id="lastName" type="text" placeholder="last name" onChange={this.handleChange} />
          </label>
          <label>
            <i className="fas fa-phone" />
            <input id="number" type="number" placeholder="number" onChange={this.handleChange} />
          </label>
          <label>
            <i className="far fa-envelope" />
            <input id="email" type="email" placeholder="email" onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

AddContactModal.propTypes = {
  clicked: PropTypes.bool.isRequired,
};

export default AddContactModal;
