import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return(
        <nav>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/profile'>Profile</Link></p>
        </nav>
    )
};

export default Navigation;