import { NavBar2 } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "../components/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const AboutUs = () => {
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

               
            <h1 className="welcome"> About Us</h1>
                <br></br><br></br>
              
            <p class ="aboutUs">Here at Unimeet we believe if you really want to experience US college life, you should plan to make the most of your free time when you are not attending
                any lectures and classes. The activity-packed student lifestyle means that finding student organizations to match your
                interests is not likely to be difficult.

                Each US college has its own selection of organizations which are operated by current students or alumni. Their activities may be
                based on the major fields of study at the institution, while many societies focus on particular interests of students. Take the
                chance to join or form student organizations that cover your interests, and explore opportunities to network, share and develop
                leadership skills. The experience will widen your horizons, allow you to improve your skills, and provide valuable experience.

                You can actually find a student organization for almost anything you want. Any interest or hobby you have, you will find a society
                active in that area. It is best to start researching the student organizations based on the UNCC campus before you actually
                arrive. This will make it easier to choose and join the societies you like when you arrive. 
          
                </p>
            
        </div>
     <Footer />
        </div>
    );
}