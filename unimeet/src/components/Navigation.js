import {signInGoogle,signOutGoogle,Userphoto} from './Firebase';
import { useNavigate } from "react-router-dom";
import CstmButton from './CstmButton';
import UNCCLogo from '../images/UNCC Logo White Cropped.png';
import UnimeetLogo from '../images/Unimeet_Home.png';

/*Two navbars. If signed in they switch.*/

/* Navbar if user is not signed in */
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

/* Navbar if user is signed in */
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