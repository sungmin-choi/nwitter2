import React from 'react';
import { doc,deleteDoc } from "firebase/firestore";
import { db } from '../../fbase';
import styles from './Nweet.module.css';
const Nweet = ({nweet,userObj}) => {
    const onDelete=async(event)=>{
        const confirm = window.confirm("are u sure delete?");
        if(confirm){
            const {target:{value}} = event;
            await deleteDoc(doc(db, "Nweets", `${value}`));

        }
    }
    return (
        <div className="">
            <p>{nweet.nweet}</p>
            {userObj && <div>
                <button onClick={onDelete} value={nweet.id}>Delete</button>
                <button>Edit</button>
                </div>}
        </div>
    )
};

export default Nweet;