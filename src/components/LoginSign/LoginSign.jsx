import React, { useRef, useState } from 'react';
import { auth } from '../../fbase';
import { useNavigate } from 'react-router';  
import styles from './LoginSign.module.css';
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         GoogleAuthProvider,
         signInWithPopup,
         GithubAuthProvider} from 'firebase/auth';

const LoginSign = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [newAccount,setNewAccount]=useState(true);
    const navigate = useNavigate();
    let submitBtn = useRef();
    
    const toggleAccount=()=>setNewAccount(prev=>!prev);

    const onChange=(event)=>{
        const {target:{value,name}}=event;
        if(name==="email"){
            setEmail(value);
        }else if(name==="password"){
            setPassword(value);
        }
    }

    const socialLogin=async(event)=>{
        const {target:{name}}=event;
        let provider;
        if(name==="Google"){provider = new GoogleAuthProvider();}
        else if(name==="Github") {provider = new GithubAuthProvider();};
        await signInWithPopup(auth,provider)
        .then()
        .catch((error)=>{
            console.log(error.message);
            navigate('/');
        })
    }

    const onSubmit =async(event)=>{
        event.preventDefault();
        const submitValue=submitBtn.current.value;
        if(submitValue==="SignIn"){
            await signInWithEmailAndPassword(auth, email, password)
            .then(()=>{
                console.log("SignIn success");
            }
            ).catch((error)=>{
                console.log(error.message);
                alert(error.message);
            }
            );
        }else if(submitValue==="Create Account"){
            await createUserWithEmailAndPassword(auth, email, password)
            .then(async()=>{
                await signInWithEmailAndPassword(auth, email, password);
            }
            ).catch((error)=>{
                console.log(error.message);
                alert(error.message);
            }
            );  
        }
    }

    return(
        <div className={styles.container}>
        <form className={styles.loginform} onSubmit={onSubmit}>
            <input className={styles.input,styles.inputEmail} onChange={onChange} name="email" type="email" placeholder="input your email"/>
            <input className={styles.input,styles.inputPassword}onChange={onChange} name="password" type="password" placeholder="input your password"/>
            <input className={styles.input,styles.submitBtn}type="submit" ref={submitBtn} value={newAccount ? `Create Account` : `SignIn`}/>
        </form>
            <button className={styles.toggleBtn} onClick={toggleAccount}>{newAccount ? `SignIn` : `Create Account`}</button>
            <div className="social-login">
                <button className={styles.socialLogin} onClick={socialLogin}name="Google">Google Login</button>
                <button className={styles.socialLogin} onClick={socialLogin} name="Github">Githb Login</button>
            </div>
        </div>
    )
};

export default LoginSign;