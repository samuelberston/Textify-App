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
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { confirmTime } = this.props;
    return (
      <div id="time">
        <form onSubmit={(e) => { confirmTime(e, this.state); }} id="timeForm">
          <input id="dayOfWeek" type="string" placeholder="day of the week" onChange={this.handleChange} />
          <input id="month" type="month" placeholder="month" onChange={this.handleChange} />
          <input id="dayOfMonth" type="number" min="1" max="31" placeholder="day of the month" onChange={this.handleChange} />
          <input id="time" type="time" placeholder="time" onChange={this.handleChange} />
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
