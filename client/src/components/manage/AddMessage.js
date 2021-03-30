import React from 'react';

import Schedule from '../schedule/Schedule';

class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.exitModal = this.exitModal.bind(this);
  }

  exitModal() {
    this.setState({
      clicked: false,
    });
  }

  render() {
    const { clicked } = this.state;
    return (
      <div id="addMessageContainer">
        <div id="addMessage" role="button" onClick={() => { this.setState({ clicked: true }); }} onKeyPress={() => { this.setState({ clicked: true }); }} tabIndex={0}>
          <i className="fas fa-plus" />
        </div>
        <Schedule clicked={clicked} exitModal={this.exitModal} />
      </div>
    );
  }
}

export default AddMessage;
