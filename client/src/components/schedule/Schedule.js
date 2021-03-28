import React from 'react';
import axios from 'axios';

import Content from './Content';
import Time from './Time';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      time: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.confirmContent = this.confirmContent.bind(this);
    this.confirmTime = this.confirmTime.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { content, time } = this.state;
    const body = { content, time };
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

  confirmTime(e, time) {
    e.preventDefault();
    this.setState({
      time,
    });
  }

  render() {
    return (
      <div id="schedule">
        <form name="schedule" onSubmit={this.onSubmit}>
          <Time confirmtime={this.confirmTime} />
          <Content confirmContent={this.confirmContent} />
          <input type="submit" value="schedule" />
        </form>
      </div>
    );
  }
}

export default Schedule;
