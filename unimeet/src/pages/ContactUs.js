/*
This is the Create Event page
*/
import React, { useEffect, useState } from "react";
import { NavBar2 } from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Footer } from "../components/Footer";

export const ContactUs = () => {
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
        <div>
            <div className="textBackground">


                <NavBar2 />


             
                <h1 className="welcome"> Contact Us</h1>
                <br></br><br></br> <br></br><br></br>

              
                <h2>Email:</h2> <h3>unimcontact@unimeet.com </h3><br></br><br></br>
                <h2>Address:</h2>
                <h3>The University of North Carolina at Charlotte</h3>
                <h3>Attn: Unimeet</h3>
                <h3>9201 University City Boulevard</h3>
                    <h3>Charlotte, NC 28223-0001</h3>
               
                </div>
            <Footer />
        </div>
    );
}





