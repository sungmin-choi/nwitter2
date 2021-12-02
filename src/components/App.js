import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
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
        setUserObj(user);
      }
      else{
        setIslogined(false);
        setUserObj(null);
      }
      setInit(true);
    });
  },[]);

  return (
    <div className="App">
      {init ? <AppRouter userObj={userObj} islogined={islogined}/> :'initialized'}
    </div>
  );
}

export default App;
