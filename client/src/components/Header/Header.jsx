import React from 'react';

import User from './User/User.jsx';

const Header = (props) => {
    return (
        <div id="header">
            <User username={props.username}/>
        </div>
    )
}

export default Header;