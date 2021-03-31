import React from 'react';

import AddContactModal from './AddContactModal';

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  exitModal() {
    this.setState({
      clicked: false,
    });
  }

  render() {
    const { clicked } = this.state;
    return (
      <div id="addContactContainer">
        <div id="addContact" role="button" onClick={() => { this.setState({ clicked: !clicked }); }} onKeyPress={() => { this.setState({ clicked: !clicked }); }} tabIndex={0}>
          <i className="far fa-address-card" />
        </div>
        <AddContactModal clicked={clicked} />
      </div>
    );
  }
}

export default AddContact;
