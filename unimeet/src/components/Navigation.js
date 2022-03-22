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
    <header className="topbar">
      <header className="header">
        <div class="links">
          <img 
            className="Unimeet-Logo" 
            src={UnimeetLogo}
            height=""
            width="75"
          />
          <img 
            className="UNCC-Logo" 
            src={UNCCLogo}
          />
          <div className="login-button"><CstmButton text="Log In" variant="white" onClick={signInGoogle}/></div>
          <div className="signup-button"><CstmButton text="Sign Up" variant="gold"/></div>
        </div>
      </header>
    </header>
    
  )
}

export const NavBar2 = () => {
  const navigate = useNavigate();
  
  const navigateCreateEventPate = () => navigate("/CreateEventPage");
  const navigateDashBoard = () =>  navigate('/Dashboard');
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={navigateDashBoard}> <img src={logo} height = {120} alt= "logo"/></Navbar.Brand>
        <Nav className="me-auto">
        <img src={uncc2} height = {150} style={{paddingLeft: '250px',  }}alt= "uncc2"/>
        </Nav>
        <div className="custonbuttom">
          
        <Button variant="success" onClick={navigateCreateEventPate}> Create Event</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="success" onClick={signOutGoogle}> Sign out</Button>
        </div>
       <Userphoto/>
      </Container>
    </Navbar>

  )
}




