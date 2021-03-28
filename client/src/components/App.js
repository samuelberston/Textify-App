import React from 'react';
import Schedule from './schedule/Schedule';
import Manage from './manage/Manage';

import messages from '../dummydata/__messages__';

const App = () => (
  <div id="container">
    <Schedule />
    <Manage messages={messages} />
  </div>
);

export default App;
