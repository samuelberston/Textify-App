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
        <div id="addMessage" role="button" onClick={() => { this.setState({ clicked: !clicked }); }} onKeyPress={() => { this.setState({ clicked: !clicked }); }} tabIndex={0}>
          <span className="fas fa-plus" />
        </div>
        <Schedule clicked={clicked} exitModal={this.exitModal} />
      </div>
    );
  }
}

export default AddMessage;
