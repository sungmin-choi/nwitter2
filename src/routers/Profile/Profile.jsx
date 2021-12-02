import React from 'react';
import { auth } from '../../fbase';
import { useNavigate } from 'react-router';

const Profile = ({userObj}) => {
    const navigate = useNavigate();
    const Logout =()=>{
        auth.signOut();
        navigate('/');
    }
    return(
        <div className="">
            <h1>Profile</h1>
            <button onClick={Logout}>Log Out</button>
        </div>
    )
};

export default Profile;