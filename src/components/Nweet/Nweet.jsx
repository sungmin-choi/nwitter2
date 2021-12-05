import React, { useState } from 'react';
import { doc,deleteDoc ,setDoc} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db ,storage} from '../../fbase';
import styles from './Nweet.module.css';
const Nweet = ({nweet,userObj}) => {
    const [isEdit,setIsEdit]=useState(false);
    const [editNweet,setEditNweet] = useState(nweet.nweet);
    const toggleEdit = ()=>setIsEdit(prev=>!prev);

    const onDelete=async(event)=>{
        const confirm = window.confirm("are u sure delete?");
        if(confirm){
            const {target:{value}} = event;
            if(nweet.imageUrl){
            const desertRef = ref(storage, nweet.imageUrl);
            await deleteObject(desertRef);
            }
            await deleteDoc(doc(db, "Nweets", `${value}`));

        }
    }

    const onEditNweet =async()=>{
        if(editNweet){
            const confirm = window.confirm("are u sure Edit?");
            if(confirm){
                await setDoc(doc(db, "Nweets", `${nweet.id}`), {
                    ...nweet,
                    nweet:editNweet
                  });
                  toggleEdit();
            }
        }
        

    }

    const onChangeEdit = (event)=>{
        const {target:{value}} = event;
        setEditNweet(value);
    }

    return (
        <div className="">
            {userObj ? (!isEdit ?(<>
                <p>{nweet.nweet}</p>
                {nweet.attachmentUrl &&<img src={nweet.attachmentUrl} alt="attachment" width="50px" height="50px" />}
                <div>
                <button onClick={onDelete} value={nweet.id}>Delete</button>
                <button onClick={toggleEdit}>Edit</button>
                </div>
                </>):(
                <>
                <input onChange={onChangeEdit} type="text" value={editNweet} placeholder="input Edit Nweet" />
                <button onClick={onEditNweet}>Edit Nweet</button>
                <button onClick={toggleEdit}>Cancel</button>
                </>)):
                (<p>{nweet.nweet}</p>)}
           
        </div>
    )
};

export default Nweet;