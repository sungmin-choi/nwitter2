import React, { useEffect } from 'react';
import { collection,doc, getDoc } from "firebase/firestore";
import { db } from '../../fbase';
const Nweets = (props) => {
    const getNweets = async()=>{
        const docRef = doc(db, "Nweets","Nweet");
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
    }
    useEffect(()=>{
        getNweets();
    },[])

    return(
        <h1>Hello</h1>
    )
};

export default Nweets;