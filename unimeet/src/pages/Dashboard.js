import { NavBar2 } from '../components/Navigation'
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";



export const Dashboard = () => {
  const navigate = useNavigate();
  const [userdata] = useAuthState(auth);
  useEffect(() => {
    if (!userdata) {

      navigate('/')
      
    }

  },[userdata])
  
  return (
    <div className="textBackground">
      <NavBar2 />
      <h1> This is the Dashboard</h1>
      <Mapapi />
    </div>

  );

}



const Mapapi = () => {
  return (
    <div>
      <h1>Hello</h1>

    </div>


  );


}