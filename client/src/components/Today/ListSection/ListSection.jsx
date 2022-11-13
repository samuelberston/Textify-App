import React from 'react';

import ListItem from './ListItem/ListItem.jsx';

const ListSection = (props) => {
    const {todos} = props; 
    return (
        <div id="listSection">
            list section
            {todos.map((item) => {
                return <ListItem todo={item}/>
            })}
        </div>
    );
}

export default ListSection;
