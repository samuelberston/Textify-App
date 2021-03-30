import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    });
  }

  render() {
    // const { contact } = this.props;
    return (
      <div className="contact">
        <div className="firstName">
          Sam
        </div>
        <div className="lastName">
          Berston
        </div>
        <div className="email">
          samuelberston@gmail.com
        </div>
        <div className="number">
          +14158468793
        </div>
        <div className="address">
          address
        </div>
      </div>
    );
  }
}

// Contact.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.objectOf()).isRequired,
// };

export default Contact;
