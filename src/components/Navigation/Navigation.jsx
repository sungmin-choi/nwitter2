import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = ({userObj}) => {
    return(
        <nav>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/profile'>{`${userObj.displayName}의 Profile`}</Link></p>
        </nav>
    )
};

export default Navigation;