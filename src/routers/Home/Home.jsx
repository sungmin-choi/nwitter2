import React, { useRef, useState } from 'react';
import styles from './Home.module.css';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc } from "firebase/firestore";
import { db,storage } from '../../fbase';
import Nweets from '../../components/Nweets/Nweets';
import { ref,uploadString,getDownloadURL } from "firebase/storage";
const Home = ({userObj}) => {
    const [nweet,setNweet] = useState("");
    const [attachment,setAttachment]=useState();
    let fileRef = useRef();

    const onChange = (event) =>{
        const {target:{value}} = event;
        setNweet(value); 
    }

    const onSubmit = async(event)=>{
        event.preventDefault();
        let imagedataUrl="";
        let imageUrl="";
        if(attachment){
        imageUrl = `${userObj.uid}/${uuidv4()}`;
        const storageRef = ref(storage, imageUrl);
        await uploadString(storageRef, attachment, 'data_url');
        imagedataUrl = await getDownloadURL(ref(storage, imageUrl));
        }
        const nweetObj={
            ...userObj,
            nweet,
            createAt: Date.now(),
            imageUrl,
            attachmentUrl:imagedataUrl
        }
        await addDoc(collection(db, "Nweets"),nweetObj); 
        setNweet("");
        fileRef.current.value="";
        setAttachment("");
    }

    const onChangeFile=(event)=>{
        const {target:{files}}=event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend=(event)=>{
            const {target:{result}}=event;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    }

    const cancelUpload = ()=>{
        fileRef.current.value="";
        setAttachment("");
    }

    return(
        <div className={styles.container}>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={nweet} type="text" placeholder="input your mind" maxLength={120} />
            <input onChange={onChangeFile} ref={fileRef} type="file"  accept="image/*"/>
            <input type="submit" value="Nweet" />
            {attachment && <div>
                <img src={attachment} alt="attachment" width="50px" height="50px" />
                <button onClick={cancelUpload}>Cancel upload</button>
                </div>}
        </form>
        <Nweets userObj={userObj}/>
        </div>
    )
};

export default Home;