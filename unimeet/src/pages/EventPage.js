import { NavBar2 } from "../components/Navigation";
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import DisplayEvent from '../components/DisplayEvent';
import CstmButton from '../components/CstmButton';

/* TODO: Implement with actual data, need way to route to each unique event */

export const EventPage = () => {
    const [didMount, setDidMount] = useState(false); 
    const navigate = useNavigate();
    const [userdata] = useAuthState(auth);
    useEffect(() => {
    
      setDidMount(true);
      if(!didMount) {
        return null;
      }
    
      if (!userdata) {
        navigate('/')
      }
      
    }, [userdata])
    
        return (
            <>
            <style type="text/css">
            {`
            .eventPageSignUpButton {
                position: absolute;
                margin-top: 42em;
                width: 50%;
                left: 25%;
            }
            `}
            </style>

            <div className="textBackground">
                <NavBar2/>
                <DisplayEvent/>
                <div className="eventPageSignUpButton"><CstmButton text="Sign Up" variant="gold" size="xl"/></div>
            </div>
            </>
        );
}