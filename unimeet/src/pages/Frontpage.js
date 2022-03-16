import { NavBar1 } from "../components/Navigation";
import Slideshow from "../components/Slideshow";
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


export const Frontpage = () => {
const navigate = useNavigate();
const [userdata] = useAuthState(auth);
useEffect(()=>{
    if(userdata){
    navigate('/Dashboard')
    }
},[userdata])

    return (
        <div className="textBackground">
        <NavBar1/>
        <h1> Welcome to Unimeet</h1>
        <Slideshow/>
        </div>
        
    );
}