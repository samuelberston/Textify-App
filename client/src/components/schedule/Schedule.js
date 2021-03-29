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
      <div id="scheduleContainer">
        <div id="scheduleTitle">
          <h3> Schedule Your Text </h3>
          &nbsp; &nbsp;
          <i className="fa fa-clock" />
        </div>
        <div id="schedule">
          <Time confirmtime={this.confirmTime} />
          <Content confirmContent={this.confirmContent} />
        </div>
        <div id="scheduleButton">
          <input type="button" value="schedule" onClick={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default Schedule;
