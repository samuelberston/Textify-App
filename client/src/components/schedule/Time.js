import React from 'react';
import PropTypes from 'prop-types';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: null,
      month: null,
      dayOfMonth: null,
      time: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { confirmTime } = this.props;
    return (
      <div id="time">
        <form onSubmit={(e) => { confirmTime(e, this.state); }} id="timeForm">
          <select id="dayOfWeek" type="string" placeholder="day of the week" onChange={this.handleChange} multiple>
            <option id="dayOfWeek" value="Monday">Monday</option>
            <option id="dayOfWeek" value="Tuesday">Tuesday</option>
            <option id="dayOfWeek" value="Wednesday">Wednesday</option>
            <option id="dayOfWeek" value="Thursday">Thursday</option>
            <option id="dayOfWeek" value="Friday">Friday</option>
            <option id="dayOfWeek" value="Saturday">Saturday</option>
            <option id="dayOfWeek" value="Sunday">Sunday</option>
          </select>
          <input id="month" type="month" placeholder="month" onChange={this.handleChange} />
          <input id="dayOfMonth" type="number" min="1" max="31" placeholder="day of the month" onChange={this.handleChange} />
          <input id="time" type="time" placeholder="time" onChange={this.handleChange} required />
          <input type="submit" value="confirm" />
        </form>
      </div>
    );
  }
}

Time.propTypes = {
  confirmTime: PropTypes.func.isRequired,
};

export default Time;
