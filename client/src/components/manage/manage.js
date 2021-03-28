import React from 'react';
import PropTypes from 'prop-types';

import Message from './message';

class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    const { messages } = this.props;
    const { selected } = this.state;

    return (
      <div id="manage">
        <div id="messages">
          {messages.forEach((msg) => (
            <div id="message">
              <Message title={msg.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default Manage;
