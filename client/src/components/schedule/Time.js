import React from 'react';
import PropTypes from 'prop-types';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
    };
  }

  render() {
    const { confirmTime } = this.props;
    const { time } = this.state;
    return (
      <div id="time">
        <form onSubmit={confirmTime.bind(time)}>
          <input id="dayOfWeek" type="string" placeholder="day of the week" />
          <input id="month" type="month" placeholder="month" />
          <input id="dayOfMonth" type="number" min="1" max="31" placeholder="day of the month" />
          <input id="time" type="time" placeholder="time" />
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
