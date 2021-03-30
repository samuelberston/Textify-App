import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      to: null,
      text: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { confirmContent } = this.props;
    return (
      <div id="content">
        <form id="contentForm" onSubmit={(e) => confirmContent(e, this.state)}>
          <input id="title" type="text" placeholder="title" onChange={this.handleChange} required />
          <input id="to" type="number" placeholder="(123) 456-7890" onChange={this.handleChange} required />
          <input id="text" type="text" placeholder="Good morning, love!" onChange={this.handleChange} required />
          <input type="submit" value="confirm" />
        </form>
      </div>
    );
  }
}

Content.propTypes = {
  confirmContent: PropTypes.func.isRequired,
};

export default Content;
