import {Nav,Container,Navbar,Button } from 'react-bootstrap';
import {signInGoogle,signOutGoogle,Userphoto} from './Firebase';
import { useNavigate } from "react-router-dom";
import CstmButton from './CstmButton';

/* TODO: Decide on style then remove and replace unused imports */
import UNCCLogo from '../images/UNCC Logo White Cropped.png';
import UnimeetLogo from '../images/Unimeet_Home.png';
import logo from "..//images/logo.jpg";
import uncc2 from "..//images/uncc2.jpg";

/*Two navbars. If signed in they switch.*/

/* TODO: Switch positions of login and signup buttons, may have to be done in css */
export const NavBar1 = () => { 
  return (
    <header className="topbar1">
      <header className="header1">
        <div className="links">
          <img 
            className="Unimeet-Logo" 
            src={UnimeetLogo}
            height=""
            width="75"
            style={{cursor:'pointer'}}
          />
          <img 
            className="UNCC-Logo" 
            src={UNCCLogo}
          />
          <div className="login-button"><CstmButton text="Log In" variant="gold" onClick={signInGoogle}/></div>
        </div>
      </header>
    </header>
    
  )
}

export const NavBar2 = () => {
  const navigate = useNavigate();
  
  const navigateCreateEventPage = () => navigate("/CreateEventPage");
  const navigateDashBoard = () =>  navigate('/Dashboard');
  const navigateMyEventsPage = () => navigate('/MyEventsPage');

  return (
    <div className="topbar2">
      <div className="pages">
        <div className="navHome" onClick={navigateDashBoard} style={{cursor:'pointer'}}>Home</div>
        <div className="navMyEvents" onClick={navigateMyEventsPage} style={{cursor:'pointer'}}>My Events</div>
        <div className="navCreateEvent" onClick={navigateCreateEventPage} style={{cursor:'pointer'}}>Create Event</div>
      </div>
      <div className="header2">     
        <div className="links">
          <img 
            className="Unimeet-Logo" 
            src={UnimeetLogo}
            height=""
            width="75"
            onClick={navigateDashBoard}
            style={{cursor:'pointer'}}
          />
          <img 
          className="UNCC-Logo" 
          src={UNCCLogo}
          />
          <div className= "userimage"><Userphoto/></div>   
          <div className="signout-button"><CstmButton text="Sign Out" variant="white" onClick={signOutGoogle}/></div>
        </div>
      </div>
    </div>
       
  )
}



export const NavBar3 = () => {
  const navigate = useNavigate();
  
 const navigateCreateEventPate = () => navigate("/CreateEventPage");
  const navigateDashBoard = () =>  navigate('/Dashboard');
  return (
 
      <header className="topbar">
              <header className="header">
             
        <div className="links">
          <img 
            className="Unimeet-Logo" 
            src={UnimeetLogo}
            height=""
            width="75"
            onClick={navigateDashBoard}
          />
          <img 
          className="UNCC-Logo" 
          src={UNCCLogo}
        />

        <div className= "userimage"><Userphoto/></div>   
        <div className="signout-button"><CstmButton text="Sign Out" variant="white" onClick={signOutGoogle}/></div>
        <div className="home-button"><CstmButton text="Home" variant="gold" onClick={navigateDashBoard}/></div>

       
        </div>
       </header>
       </header>
       


  )
}

