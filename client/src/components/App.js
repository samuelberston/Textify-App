import React from 'react';
import axios from 'axios';

import Header from './header/Header';
import About from './about/About';
import Manage from './manage/Manage';
import Contacts from './contacts/Contacts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
      contacts: null,
    };
    this.getMessages = this.getMessages.bind(this);
    this.getContacts = this.getContacts.bind(this);
  }

  componentDidMount() {
    this.getMessages();
    this.getContacts();
  }

  getMessages() {
    axios.get('/messages')
      .then((data) => {
        this.setState({
          messages: data.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  getContacts() {
    axios.get('./contacts')
      .then((res) => {
        this.setState({
          contacts: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { messages, contacts } = this.state;
    return (
      <div id="container">
        <Header />
        <div id="controller">
          <About />
          { messages !== null
            ? <Manage messages={messages} getMessages={this.getMessages} />
            : ''}
          { contacts !== null
            ? <Contacts contacts={contacts} />
            : ''}
        </div>
      </div>
    );
  }
}

export default App;
