import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      to: null,
      from: null,
      message: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { contentConfirm } = this.props;
    return (
      <div id="content">
        <form id="contentForm" onSubmit={contentConfirm}>
          <input id="title" type="text" placeholder="title" required />
          <input id="to" type="number" placeholder="(123) 456-7890" required />
          <input id="from" type="number" placeholder="(123) 456-7890" required />
          <input id="text" type="text" placeholder="Good morning, love!" required />
          <input type="submit" value="confirm" />
        </form>
      </div>
    );
  }
}

Content.propTypes = {
  contentConfirm: PropTypes.func.isRequired,
};

export default Content;
