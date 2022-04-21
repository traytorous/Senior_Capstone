import { NavBar2 } from '../components/Navigation'
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import MapAndMenu from '../components/MapAndMenu';

export const Dashboard = () => {
  const [didMount, setDidMount] = useState(false);
  const navigate = useNavigate();
  const [userdata] = useAuthState(auth);
  useEffect(() => {

    setDidMount(true);
    if (!didMount) {
      return null;
    }

    if (!userdata) {

      navigate('/')

    }


  }, [userdata])

  return (
    <div className="textBackground">
      <NavBar2 />
      <h1> Welcome {localStorage.getItem("username")}</h1>
      <div className="mainArea">
        <MapAndMenu/>
      </div>
    </div>

  );
}