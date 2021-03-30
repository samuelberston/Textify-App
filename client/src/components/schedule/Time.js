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
