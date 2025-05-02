"use client";
import { auth } from "./firebase.js"
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider.js";
import { useEffect } from "react";


export default function CheckUser(){
    const {state, dispatch} = useStateValue();
    console.log("here");
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("USER IS >>>>> ", authUser);
            if (authUser){
                //then user just logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                })
            }
            else{
                //user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                })
            } 
        })
    }, []);

    return null;
}