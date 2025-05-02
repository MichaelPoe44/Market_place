"use client";
import "./Login.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useState} from "react";
import { auth } from "../firebase.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";





//3.48.20


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const signIn = (e) => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth,email,password)
        .then( auth => {
            router.back();
        })
        .catch(error => alert(error.message));
        
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
            //on success
            .then(auth => {
                if (auth) {
                    router.back();
                }
            })
            //on fail
            .catch(error => alert(error.message));
        
    }


    return(
        <div className="login">

            <Link href="/">
                <img className="logo" src="black_amazon.png" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>

                    <button className="login_signInButton" onClick={signIn} type="submit">
                        Sign In
                    </button>

                </form>
                
                <p>By signing in you agree to My Amazon's Conditions and Use.</p>

                <button onClick={register} className="login_createButton">
                    Create Account
                </button>

            </div>


        </div>
    );
}