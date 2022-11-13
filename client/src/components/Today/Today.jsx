import React from 'react';

import ListSection from './ListSection/ListSection.jsx';

const Today = (props) => {
    return (
        <div id="today">
            Today's to-dos
            <ListSection todos={props.todoItems}/>
        </div>
    );
}

export default Today;
