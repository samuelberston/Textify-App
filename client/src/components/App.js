import React from 'react';
import Schedule from './schedule/Schedule';
import Manage from './manage/Manage';

import messages from '../dummydata/__messages__';

const App = () => (
  <div id="container">
    <h2> textify </h2>
    <div id="controller">
      <Schedule />
      <Manage messages={messages} />
    </div>
  </div>
);

export default App;
