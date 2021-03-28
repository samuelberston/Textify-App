import React from 'react';

import Header from './header/Header';
import Schedule from './schedule/Schedule';
import Manage from './manage/Manage';

import messages from '../dummydata/__messages__';

const App = () => (
  <div id="container">
    <Header />
    <div id="controller">
      <Schedule />
      <Manage messages={messages} />
    </div>
  </div>
);

export default App;
