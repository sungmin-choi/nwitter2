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
        const userObj={
          email:user.email,
          uid:user.uid,
          createAt: Date.now(),
        }
        setUserObj(userObj);
      }
      else{
        setIslogined(false);
        setUserObj(null);
      }
      setInit(true);
    });
  },[]);

  return (
    <div className={styles.App}>
      {init ? <AppRouter userObj={userObj} islogined={islogined}/> :'initialized'}
    </div>
  );
}

export default App;
