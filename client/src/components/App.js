import React from 'react';
import Schedule from './schedule/Schedule';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="container">
        <Schedule />
      </div>
    );
  }
}

export default App;
