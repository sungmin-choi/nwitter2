import React, { useState } from 'react';
import { auth } from '../../fbase';
import { useNavigate } from 'react-router';
import { updateProfile } from "firebase/auth";

const Profile = ({userObj,refreshUser}) => {
    const [isEditName,setIsEditName] = useState(false);
    const [editName ,setEditName] = useState(userObj.displayName);

    const onChangeEditName = (event)=>{
        const {target:{value}} = event;
        setEditName(value);
    }
    const toggleEditName =()=> setIsEditName(prev=>!prev);

    const navigate = useNavigate();

    const Logout =()=>{
        auth.signOut();
        navigate('/');
    }

    const onSubmitEditName = async(event)=>{
        event.preventDefault();
        if(userObj.displayName!==editName){
        await updateProfile(auth.currentUser, {
            displayName: editName
          }).then(() => {
            console.log("super");
          }).catch((error) => {
            console.log(error);
          });
        }
        refreshUser();
        toggleEditName();
    }

    return(
        <div className="">
            {isEditName ?(
            <>
            <form onSubmit={onSubmitEditName}>
                <input onChange={onChangeEditName} type="text"  value={editName}/>
                <input type="submit" value="Edit Name" />
            </form>
            </>):(
            <>
            <button onClick={toggleEditName}>Edit Name</button>
            <button onClick={Logout}>Log Out</button>
            </>)}

        </div>
    )
};

export default Profile;