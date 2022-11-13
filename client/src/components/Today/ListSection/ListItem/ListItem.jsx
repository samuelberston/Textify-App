import React from 'react';

const ListItem = (props) => {
    const {todo} = props;
    return (
        <div id="listItem">
            {todo.task}
        </div>
    );
}

export default ListItem;
