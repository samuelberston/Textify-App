import React from 'react';

const User = (props) => {
    const firstInitial = props.username[0];
    return (
        <div id="user">
            {firstInitial}
        </div>
    );
}

export default User;
