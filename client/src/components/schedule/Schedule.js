import React from 'react';
import axios from 'axios';

import Content from './Content';
import Time from './Time';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      schedule: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.confirmContent = this.confirmContent.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { content, schedule } = this.state;
    const body = { content, schedule };
    axios.post('/messages', body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }

  confirmContent(e, content) {
    e.preventDefault();
    this.setState({
      content,
    });
  }

  render() {
    return (
      <div id="schedule">
        <form name="schedule" onSubmit={this.onSubmit}>
          <Time />
          <Content confirmContent={this.confirmContent} />
          <input type="submit" value="schedule" />
        </form>
      </div>
    );
  }
}

export default Schedule;
