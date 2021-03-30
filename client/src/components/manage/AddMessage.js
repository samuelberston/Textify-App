import React from 'react';

import Schedule from '../schedule/Schedule';

const AddMessage = () => {
  const [clicked, click] = React.useState(false);

  return (
    <div id="addMessageContainer">
      <div id="addMessage" onClick={() => { click(!clicked); }}>
        <i className="fas fa-plus" />
      </div>
      <Schedule clicked={clicked} />
    </div>
  );
};

export default AddMessage;
