import React from 'react';
import axios from 'axios';

import Header from './header/Header';
import Manage from './manage/Manage';
import Contacts from './contacts/Contacts';

// import messages from '../dummydata/__messages__';
import contacts from './contacts/__contacts__';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
    };
    this.getMessages = this.getMessages.bind(this);
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    axios.get('/messages')
      .then((res) => {
        this.setState({
          messages: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { messages } = this.state;
    return (
      <div id="container">
        <Header />
        <div id="controller">
          { messages !== null
            ? <Manage messages={messages} />
            : ''}
          <Contacts contacts={contacts} />
        </div>
      </div>
    );
  }
}

export default App;
