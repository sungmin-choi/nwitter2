import React, { useEffect, useState } from 'react';
import { collection,query,onSnapshot} from "firebase/firestore";
import { db } from '../../fbase';
import Nweet from '../Nweet/Nweet';
const Nweets = ({userObj}) => {
    const [nweets,setNweets] = useState([]);

    const getNweets = () =>{
        const q = query(collection(db, "Nweets"));
        onSnapshot(q, (document) => {
            let NweetsArray=[];
            document.forEach(doc=>{
                const nweetObject={
                    ...doc.data(),
                    id:doc.id,
                };
                NweetsArray.push(nweetObject);
            })
            NweetsArray.sort((a,b)=>{
                return b["createAt"]-a["createAt"];
            })
            setNweets(NweetsArray);
        });
    
    }
    useEffect(()=>{
        getNweets();
    },[]);

    return(
        <>
        {nweets.map((nweet)=><Nweet nweet={nweet} key={nweet.id} userObj={userObj.uid===nweet.uid}/>)}
        </>
    )
};

export default Nweets;