import { NavBar1 } from "../components/Navigation";
import Slideshow from "../components/Slideshow";
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Footer1 } from "../components/Footer";

export const Frontpage = () => {
const navigate = useNavigate();
const [userdata] = useAuthState(auth);
useEffect(()=>{
    if(userdata){
    navigate('/Dashboard')
    }
},[userdata])

    return (
        <div>
        <div className="textBackground">
        <NavBar1/>
        <h1 className="welcome"> Welcome to Unimeet</h1>
        <div className="slideshowBox"><Slideshow/></div>
        </div>
        <Footer1 />
        </div >
    );
}