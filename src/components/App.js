import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import styles from './App.module.css';
import {auth} from "../fbase";
import {onAuthStateChanged } from "firebase/auth";
function App() {
  const [init,setInit] = useState(false);
  const [islogined,setIslogined] = useState(false);
  const [userObj,setUserObj] = useState(null);

useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setIslogined(true);
        if(user.displayName==="null"){
          user.displayName="newuser";
        }
        const userObj={
          displayName:user.displayName,
          email:user.email,
          uid:user.uid,
          createAt: Date.now(),
        }
        console.log(userObj);
        setUserObj(userObj);
      }
      else{
        setIslogined(false);
        setUserObj(null);
      }
      setInit(true);
    });
  },[]);

  const refreshUser = ()=>{
    const refreshUser=auth.currentUser;
    const newUserObj={
      ...userObj,
      displayName:refreshUser.displayName
    }
    setUserObj(newUserObj);
  }
  
  return (
    <div className={styles.App}>
      {init ? <AppRouter refreshUser={refreshUser} userObj={userObj} islogined={islogined}/> :'initialized'}
    </div>
  );
}

export default App;
