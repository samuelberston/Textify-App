import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      to: null,
      text: null,
      dayOfWeek: null,
      month: null,
      dayOfMonth: null,
      time: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  postMessage(e) {
    e.preventDefault();

    const {
      title, to, text, dayOfWeek, month, dayOfMonth, time,
    } = this.state;
    const body = {
      title,
      receiver: to,
      text,
      time: {
        dayOfWeek,
        month,
        dayOfMonth,
        time,
      },
    };

    axios.post('/messages', body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { clicked, exitModal } = this.props;
    return (
      <div id="scheduleContainer" className={`modal ${clicked ? 'modalShow' : ''}`}>
        <div id="exit" role="button" onClick={exitModal} onKeyPress={exitModal} tabIndex={0}>
          <i className="fas fa-times" />
        </div>
        <div id="scheduleTitle">
          <h3> Schedule Your Text </h3>
          &nbsp; &nbsp;
          <i className="fa fa-clock" />
        </div>
        <div id="schedule">
          <form id="scheduleForm" onSubmit={this.postMessage}>
            <div id="content">
              <input id="title" type="text" placeholder="title" onChange={this.handleChange} required />
              <div id="numberInput">
                to:
                &nbsp;
                <input id="to" type="number" placeholder="(123) 456-7890" onChange={this.handleChange} required />
              </div>
              <input id="text" type="text" placeholder="Good morning, love!" onChange={this.handleChange} required />
            </div>
            <div id="time">
              <select id="month" type="string" onChange={this.handleChange}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <input id="dayOfMonth" type="number" min="1" max="31" placeholder="day of the month" onChange={this.handleChange} />
              <select id="dayOfWeek" type="string" onChange={this.handleChange}>
                <option id="dayOfWeek" value="Monday">Monday</option>
                <option id="dayOfWeek" value="Tuesday">Tuesday</option>
                <option id="dayOfWeek" value="Wednesday">Wednesday</option>
                <option id="dayOfWeek" value="Thursday">Thursday</option>
                <option id="dayOfWeek" value="Friday">Friday</option>
                <option id="dayOfWeek" value="Saturday">Saturday</option>
                <option id="dayOfWeek" value="Sunday">Sunday</option>
              </select>
              <input id="time" type="time" placeholder="time" onChange={this.handleChange} required />
            </div>
            <div id="scheduleButton">
              <input type="submit" value="schedule" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Schedule.propTypes = {
  clicked: PropTypes.bool.isRequired,
  exitModal: PropTypes.func.isRequired,
};

export default Schedule;
