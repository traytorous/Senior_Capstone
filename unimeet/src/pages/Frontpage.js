import { NavBar1 } from "../components/Navigation";
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const Frontpage = () => {
const navigate = useNavigate();
const [userdata] = useAuthState(auth);
if(userdata){
    navigate('/Dashboard')
}
    return (
        <div>
        <NavBar1/>
        <h1> This is the front page!</h1>
        </div>


    );

}