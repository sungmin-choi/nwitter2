import React, { useState } from 'react';
import styles from './Home.module.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../fbase';
import Nweets from '../../components/Nweets/Nweets';
const Home = ({userObj}) => {
    const [nweet,setNweet] = useState("");
    
    const onChange = (event) =>{
        const {target:{value}} = event;
        setNweet(value); 
    }

    const onSubmit = async(event)=>{
        event.preventDefault();
        const nweetObj={
            ...userObj,
            nweet
        }
        await addDoc(collection(db, "Nweets"),nweetObj);
        setNweet("");
    }

    return(
        <div className={styles.container}>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={nweet} type="text" placeholder="input your mind" />
            <input type="submit" value="Nweet" />
        </form>
        <Nweets/>
        </div>
    )
};

export default Home;