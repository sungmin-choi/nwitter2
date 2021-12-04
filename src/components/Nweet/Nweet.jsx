import React, { useState } from 'react';
import styles from './Nweet.module.css';
const Nweet = ({nweet,userObj}) => {
    return (
        <div className="">
            <p>{nweet.nweet}</p>
            {userObj && <div>
                <button>Delete</button>
                <button>Edit</button>
                </div>}
        </div>
    )
};

export default Nweet;