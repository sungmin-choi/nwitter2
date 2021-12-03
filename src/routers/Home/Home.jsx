import React, { useState } from 'react';
import styles from './Home.module.css';
const Home = (props) => {
    const [nweet,setNweet] = useState("");
    
    const onChange = (event) =>{
        const {target:{value}} = event;
        setNweet(value); 
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        setNweet("");
    }

    return(
        <div className={styles.container}>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={nweet} type="text" placeholder="input your mind" />
            <input type="submit" value="send" />
        </form>
        </div>
    )
};

export default Home;